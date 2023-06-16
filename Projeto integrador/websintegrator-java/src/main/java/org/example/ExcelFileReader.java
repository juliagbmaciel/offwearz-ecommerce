package org.example;

import org.apache.poi.ss.usermodel.*;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;

public class ExcelFileReader extends ExcelPrincipal {


    // Construtor vazio
    public ExcelFileReader(){
        super();
    };

    // Construtor com parâmetro de caminho do arquivo
    public ExcelFileReader(String filePath) {
        super(filePath);
    }

    // Implementação do método para ler o arquivo Excel
    @Override
    public void readExcelFile(String filePath) {
        try {
            //Classe do java que localiza o filepath
            FileInputStream file = new FileInputStream(new File(filePath));
            //Classe do java pra criar o arquivo
            Workbook workbook = WorkbookFactory.create(file);
            //Classe que pega a primeira planilha
            Sheet sheet = workbook.getSheetAt(0);

            // Itera sobre as linhas da planilha
            for (Row row : sheet) {
                // Itera sobre as células de cada linha
                for (Cell cell : row) {
                    //pega o valor da celula atual e atribui pra cellValue
                    String cellValue = CellValueConverter.convertCellValue(cell);
                    System.out.print(cellValue + "\t");
                }
                System.out.println();
            }
            //fecha construtor do workbook pq nao vai usar mais
            workbook.close();
            //fecha o construtor do fileinputstream pq nao vai usar mais
            file.close();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
