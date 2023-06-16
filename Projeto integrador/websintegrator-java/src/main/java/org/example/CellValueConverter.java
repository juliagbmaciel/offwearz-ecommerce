package org.example;

import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.CellType;

public class CellValueConverter {
    // Método estático que converte o valor da célula em uma representação String
    public static String convertCellValue(Cell cell) {
        if (cell.getCellType() == CellType.STRING) {
            return cell.getStringCellValue(); // Retorna o valor da célula como String, caso seja do tipo String
        } else if (cell.getCellType() == CellType.NUMERIC) {
            return String.valueOf(cell.getNumericCellValue()); // Retorna o valor da célula como String, caso seja do tipo Numérico
        } else {
            return ""; // Retorna uma string vazia para outros tipos de célula
        }
    }
}
