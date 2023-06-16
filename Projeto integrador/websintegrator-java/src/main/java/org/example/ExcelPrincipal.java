package org.example;

public class ExcelPrincipal {
    private String filePath;

    // Construtor com parâmetro de caminho do arquivo
    public ExcelPrincipal(String filePath) {
        this.filePath = filePath;
    }

    // Construtor vazio
    public ExcelPrincipal() {

    }

    // Método abstrato para ler o arquivo Excel
    public void readExcelFile(String filePath) {
        // Implementação do método será feita nas subclasses
    }
}
