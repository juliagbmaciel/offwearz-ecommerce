package org.example;

import org.apache.poi.ss.usermodel.*;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;

public class App{
    public static void main(String[] args) {
        try {
            // Carrega o arquivo Excel
            FileInputStream file = new FileInputStream(new File("C:\\Users\\47829927855\\Desktop\\Projeto integrador\\websintegrator-java\\tabela.xlsx"));

            // Cria uma instância de Workbook para o arquivo Excel
            Workbook workbook = WorkbookFactory.create(file);

            // Obtém a primeira planilha do arquivo
            Sheet sheet = workbook.getSheetAt(0);

            // Itera sobre as linhas da planilha
            for (Row row : sheet) {
                // Itera sobre as células de cada linha
                for (Cell cell : row) {
                    // Obtém o valor da célula
                    String cellValue = "";
                    if (cell.getCellType() == CellType.STRING) {
                        cellValue = cell.getStringCellValue();
                    } else if (cell.getCellType() == CellType.NUMERIC) {
                        cellValue = String.valueOf(cell.getNumericCellValue());
                    }
                    System.out.print(cellValue + "\t");
                }
                System.out.println();
            }

            // Fecha o arquivo Excel
            workbook.close();
            file.close();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
