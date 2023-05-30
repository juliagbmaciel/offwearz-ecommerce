from selenium import webdriver
from selenium.webdriver.common.by import By
from time import sleep
import pandas as pd


class Scrap:
    def __init__(self):
        self.site = 'file:///C:/Users/47829927855/Desktop/Projeto%20integrador/produtos/index.html'
        self.map = {
            'nome':{
                'xpath': '/html/body/main/div/div[%contador%]/a[1]/div[2]'
            },

            'valor': {
                'xpath': '/html/body/main/div/div[%contador%]/a[1]/div[3]'
            }
        }
        self.dict = {}
        self.driver = webdriver.Chrome()
        self.lista = []
        self.find_products()

    def find_products(self):
        self.nomes = []
        self.valores = []
        self.driver.get(self.site)
        sleep(4)
        for i in range(1, 9):
            self.nomes.append(self.driver.find_element(By.XPATH, self.map["nome"]["xpath"].replace('%contador%', f'{i}')).text)
            self.valores.append(self.driver.find_element(By.XPATH, self.map["valor"]["xpath"].replace('%contador%', f'{i}')).text)
        self.dict['nomes'] = self.nomes
        self.dict['valores'] = self.valores
        tabela = pd.DataFrame(self.dict)

        while True:
            print("Webscraping completo...")
            op = int(input("Deseja exportar para: \n[1]XLSX\n[2]CSV\n>>>>>>: "))
            if op == 1:
                print('Exportando para "tabela.xlsx..."')
                tabela.to_excel('tabela.xlsx')
                break
            elif op == 2:
                print('Exportando para "tabela.csv..."')
                tabela.to_csv('tabela.csv')
                break
            else:
                print("Digite uma opção válida")

o = Scrap()