import * as XLSX from 'xlsx';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

class ExportService {
    static formatDate(date) {
        if (!date) return '';
        return new Date(date).toLocaleDateString();
    }

    static exportToExcel(data, fileName) {
        try {
            // Transform data to match your backend structure
            const formattedData = data.map(item => ({
                'Date': this.formatDate(item.createdAt),
                'Name': item.name,
                'Email': item.email,
                'Phone': item.phone,
                'Product': item.product,
                'Request Type': item.requestType,
                'Location': item.location,
                'Status': item.status || 'Pending',
                'Message': item.message || '',
                'Quantity': item.quantity || '',
                'Preferred Date': item.preferredDate ? this.formatDate(item.preferredDate) : ''
            }));

            // Create worksheet
            const worksheet = XLSX.utils.json_to_sheet(formattedData);

            // Set column widths
            const colWidths = [
                { wch: 12 }, // Date
                { wch: 20 }, // Name
                { wch: 25 }, // Email
                { wch: 15 }, // Phone
                { wch: 20 }, // Product
                { wch: 15 }, // Request Type
                { wch: 20 }, // Location
                { wch: 10 }, // Status
                { wch: 30 }, // Message
                { wch: 10 }, // Quantity
                { wch: 12 }  // Preferred Date
            ];
            worksheet['!cols'] = colWidths;

            // Create workbook and add worksheet
            const workbook = XLSX.utils.book_new();
            XLSX.utils.book_append_sheet(workbook, worksheet, 'Inquiries');

            // Generate Excel file
            XLSX.writeFile(workbook, `${fileName}.xlsx`);
            
            console.log('Excel export completed successfully');
            return true;
        } catch (error) {
            console.error('Error exporting to Excel:', error);
            throw error;
        }
    }

    static exportToPDF(data, fileName) {
        try {
            const doc = new jsPDF();

            // Add header
            doc.setFontSize(16);
            doc.text('Security Inquiries Report', 14, 15);
            
            // Add date range
            doc.setFontSize(10);
            doc.text(`Generated on: ${new Date().toLocaleDateString()}`, 14, 25);

            // Prepare table data
            const tableData = data.map(item => [
                this.formatDate(item.createdAt),
                item.name,
                item.email,
                item.phone,
                item.product,
                item.requestType,
                item.location,
                item.status || 'Pending'
            ]);

            // Add table
            doc.autoTable({
                head: [['Date', 'Name', 'Email', 'Phone', 'Product', 'Request Type', 'Location', 'Status']],
                body: tableData,
                startY: 35,
                styles: {
                    fontSize: 8,
                    cellPadding: 2,
                },
                headStyles: {
                    fillColor: [41, 128, 185],
                    textColor: 255,
                    fontSize: 9,
                    fontStyle: 'bold',
                },
                alternateRowStyles: {
                    fillColor: [245, 245, 245],
                },
                margin: { top: 35 },
                didDrawPage: function(data) {
                    // Add page number at the bottom
                    doc.setFontSize(8);
                    doc.text(
                        `Page ${doc.internal.getCurrentPageInfo().pageNumber}`,
                        data.settings.margin.left,
                        doc.internal.pageSize.height - 10
                    );
                }
            });

            // Save PDF
            doc.save(`${fileName}.pdf`);
            
            console.log('PDF export completed successfully');
            return true;
        } catch (error) {
            console.error('Error exporting to PDF:', error);
            throw error;
        }
    }

    static filterByDateRange(data, startDate, endDate) {
        if (!data || !Array.isArray(data)) {
            console.warn('No data provided for filtering');
            return [];
        }

        try {
            return data.filter(item => {
                const itemDate = new Date(item.createdAt);
                return itemDate >= startDate && itemDate <= endDate;
            });
        } catch (error) {
            console.error('Error filtering by date range:', error);
            return [];
        }
    }
}

export default ExportService; 