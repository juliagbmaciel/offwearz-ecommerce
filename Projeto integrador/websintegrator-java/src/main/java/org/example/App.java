package org.example;

import org.apache.poi.ss.usermodel.*;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;

public class App {
    public static void main(String[] args) {
        // Caminho do arquivo Excel
        String filePath = "C:\\Users\\47829927855\\Desktop\\Projeto integrador\\websintegrator-java\\tabela.xlsx";

        // Instanciação do objeto ExcelPrincipal
        ExcelPrincipal excelFileReader = new ExcelFileReader();

        // Chamada do método para ler o arquivo Excel
        excelFileReader.readExcelFile(filePath);
    }
}
