import pandas as pd

import numpy as np
import simplejson



class DataFrame:
    def __init__(self,file):
        self.file = file
        self.df = pd.read_csv(self.file+'.csv')
        self.dataframe_builder()
        self.headerSanitizer()
        pass
    
    def dataframe_builder(self):
        self.df = self.df.rename(columns=lambda x: x.replace('#', 'number'))
        self.df = self.df.replace(['*****', np.NaN], np.NaN)

    def headerSanitizer(self):
        self.df.columns = self.df.columns.str.replace(' ','_')
        self.df.columns = self.df.columns.str.lower()
        for i,col in enumerate(self.df.columns):
            if(col[0] in '123456789'):
                self.df = self.df.rename(index=str, columns={str(col): "_"+str(col)})
    
    def __str__(self):
        print(self.df)
    
    
class SanitizeMajors:
    def __init__():
        pass

class SanitizeIndustry:
    def __init__():
        pass 

class CsvHelper:
    def __init__(self,file):
        self.file = file
        self.df = pd.read_csv(self.file+'.csv')
        self.dataframe_builder()
        self.columnSanitizer()
        pass
    
    def dataframe_builder(self):
        self.df = self.df.rename(columns=lambda x: x.replace('#', 'number'))
        self.df = self.df.replace(['*****', np.NaN], np.NaN)

    def columnSanitizer(self):
        self.df.columns = self.df.columns.str.replace(' ','_')
        self.df.columns = self.df.columns.str.lower()
    
    # sanitize column
    def column_sanitize_plus(self,columnName):
        self.df[columnName] = self.df[columnName].str.replace('+','')
        self.df[columnName] = self.df[columnName].str.replace(' ','')

    
    # converts to floats...
    def string_number_to_real_number(self,columnName):
        self.df[columnName] = pd.to_numeric(self.df[columnName], errors='coerce')

    def remove_dollar(self,columnName):
        self.df[columnName] = self.df[columnName].str.replace('$', '')

    def remove_hyphen(self,columnName):
        self.df[columnName] = self.df[columnName].str.replace('-','')

    def remove_comma(self,columnName):
        self.df[columnName] = self.df[columnName].str.replace(',','')

    def jsonBuilder(self):
        # data frame to dict
        output = self.df.to_dict(orient='record')

        # dict to json, file is name
        with open (self.file+'.json', 'w' ) as fp:
          fp.write(simplejson.dumps(output, sort_keys=False, indent=4, separators=(',', ': '), ensure_ascii=False,ignore_nan=True))
        fp.close()

        import json
        json_data = json.load(open(self.file+'.json'))
        for i in range(0, len(json_data)):
            if(json_data[i]["naics"]!=None):
                json_data[i]["naics"]= int(json_data[i]["naics"])
            if(json_data[i]["number_of_students_found_5_years_after_exit"]!=None):
                json_data[i]["number_of_students_found_5_years_after_exit"] = int(json_data[i]["number_of_students_found_5_years_after_exit"])
            if(json_data[i]["median_annual_earnings_5_years_after_exit"]!=None):
                json_data[i]["median_annual_earnings_5_years_after_exit"] = int(json_data[i]["median_annual_earnings_5_years_after_exit"])
            if(json_data[i]["average_annual_earnings_5_years_after_exit"]!=None):
                json_data[i]["average_annual_earnings_5_years_after_exit"] = int(json_data[i]["average_annual_earnings_5_years_after_exit"])

        with open(self.file+'.json', 'w') as outfile:
            json.dump(json_data, outfile, indent=4)

    # used for debugging
    # returns first few rows of dataframe
    def dfHead(self):
        print (self.df.head())
    
    # we need column headers in each sanitization..
    # that self.file is only used for write to and read to purposes
    # we use inclusive or in mapping

    def sanitizeHeaders(self):
        mapper = {
            'naics':self.remove_hyphen('naics') or self.string_number_to_real_number('naics'),
            'hegis_at_exist':self.column_sanitize_plus('hegis_at_exit') or self.string_number_to_real_number('hegis_at_exit'),
            'median_annual_earnings_5_years_after_exit':self.remove_dollar('median_annual_earnings_5_years_after_exit') or self.remove_comma('median_annual_earnings_5_years_after_exit') or self.string_number_to_real_number('median_annual_earnings_5_years_after_exit'),
            'average_annual_earnings_5_years_after_exit':self.remove_dollar('average_annual_earnings_5_years_after_exit') or self.remove_comma('average_annual_earnings_5_years_after_exit') or self.string_number_to_real_number('average_annual_earnings_5_years_after_exit'),
            'number_of_students_found_5_years_after_exit':self.remove_dollar('number_of_students_found_5_years_after_exit') or self.remove_comma('number_of_students_found_5_years_after_exit') or self.string_number_to_real_number('number_of_students_found_5_years_after_exit'),
        }
        for column in self.df:
            print(column)
            pd.Series(column).map(mapper)