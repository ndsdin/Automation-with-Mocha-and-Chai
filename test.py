import unittest
import time
from selenium import webdriver 
from selenium.webdriver.common.by import By
from webdriver_manager.chrome import ChromeDriverManager

class TestLogin(unittest.TestCase): 

    def setUp(self): 
        self.chrome = webdriver.Chrome(ChromeDriverManager().install())

    def test_success_login(self):
        web = self.chrome # buka chrome
        web.get('https://barru.pythonanywhere.com/daftar') # nulis alamat web
        web.find_element(By.XPATH, "/html/body/div/div[2]/form/input[1]").send_keys("barrujago@gmail.com")
        web.find_element(By.ID,"password").send_keys("barrujago")
        web.find_element(By.CSS_SELECTOR,"input#signin_login").click()

        time.sleep(2)
        popup_atas = web.find_element(By.ID,"swal2-title").text
        popup_bawah = web.find_element(By.ID, "swal2-content").text
        
        time.sleep(4)
        self.assertIn("Welcome", popup_atas)
        self.assertIn("Berhasil", popup_bawah)
        self.assertEqual(popup_bawah, "Anda Berhasil Login")

    def tearDown(self): 
        self.chrome.close() 

if __name__ == "__main__": 
    unittest.main()