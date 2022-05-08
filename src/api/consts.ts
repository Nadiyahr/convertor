export const currencyHttp = 'http://free.currconv.com';
export const apiKey = 'dd3f60ee0680556feb45';
export const BASE_URL = 'https://api.apilayer.com/fixer';
export const date = new Date().toLocaleDateString('en-CA');
const myHeaders = new Headers();

//myHeaders.append('apikey'', 'QcNkBWCbg01lRNKI6H64YumEVU0shxS7');
myHeaders.append('apikey', 'VrLd2rRsJm6EN0BsvafaQkLbWvU2jl91');

export const requestOptions = {
  method: 'GET',
  headers: myHeaders,
};

export const arr = [['AED', 'United Arab Emirates Dirham'],
['AFN', 'Afghan Afghani'],
['ALL', 'Albanian Lek'],
['AMD', 'Armenian Dram'],
['ANG', 'Netherlands Antillean Guilder'],
['AOA', 'Angolan Kwanza'],
['ARS', 'Argentine Peso'],
['AUD', 'Australian Dollar'],
['AWG', 'Aruban Florin'],
['AZN', 'Azerbaijani Manat'],
['BAM', 'Bosnia-Herzegovina Convertible Mark'],
['BBD', 'Barbadian Dollar'],
['BDT', 'Bangladeshi Taka'],
['BGN', 'Bulgarian Lev'],
['BHD', 'Bahraini Dinar'],
['BIF', 'Burundian Franc'],
['BMD', 'Bermudan Dollar'],
['BND', 'Brunei Dollar'],
['BOB', 'Bolivian Boliviano'],
['BRL', 'Brazilian Real'],
['BSD', 'Bahamian Dollar'],
['BTC', 'Bitcoin'],
['BTN', 'Bhutanese Ngultrum'],
['BWP', 'Botswanan Pula'],
['BYN', 'New Belarusian Ruble'],
['BYR', 'Belarusian Ruble'],
['BZD', 'Belize Dollar'],
['CAD', 'Canadian Dollar'],
['CDF', 'Congolese Franc'],
['CHF', 'Swiss Franc'],
['CLF', 'Chilean Unit of Account (UF)'],
['CLP', 'Chilean Peso'],
['CNY', 'Chinese Yuan'],
['COP', 'Colombian Peso'],
['CRC', 'Costa Rican Colón'],
['CUC', 'Cuban Convertible Peso'],
['CUP', 'Cuban Peso'],
['CVE', 'Cape Verdean Escudo'],
['CZK', 'Czech Republic Koruna'],
['DJF', 'Djiboutian Franc'],
['DKK', 'Danish Krone'],
['DOP', 'Dominican Peso'],
['DZD', 'Algerian Dinar'],
['EGP', 'Egyptian Pound'],
['ERN', 'Eritrean Nakfa'],
['ETB', 'Ethiopian Birr'],
['EUR', 'Euro'],
['FJD', 'Fijian Dollar'],
['FKP', 'Falkland Islands Pound'],
['GBP', 'British Pound Sterling'],
['GEL', 'Georgian Lari'],
['GGP', 'Guernsey Pound'],
['GHS', 'Ghanaian Cedi'],
['GIP', 'Gibraltar Pound'],
['GMD', 'Gambian Dalasi'],
['GNF', 'Guinean Franc'],
['GTQ', 'Guatemalan Quetzal'],
['GYD', 'Guyanaese Dollar'],
['HKD', 'Hong Kong Dollar'],
['HNL', 'Honduran Lempira'],
['HRK', 'Croatian Kuna'],
['HTG', 'Haitian Gourde'],
['HUF', 'Hungarian Forint'],
['IDR', 'Indonesian Rupiah'],
['ILS', 'Israeli New Sheqel'],
['IMP', 'Manx pound'],
['INR', 'Indian Rupee'],
['IQD', 'Iraqi Dinar'],
['IRR', 'Iranian Rial'],
['ISK', 'Icelandic Króna'],
['JEP', 'Jersey Pound'],
['JMD', 'Jamaican Dollar'],
['JOD', 'Jordanian Dinar'],
['JPY', 'Japanese Yen'],
['KES', 'Kenyan Shilling'],
['KGS', 'Kyrgystani Som'],
['KHR', 'Cambodian Riel'],
['KMF', 'Comorian Franc'],
['KPW', 'North Korean Won'],
['KRW', 'South Korean Won'],
['KWD', 'Kuwaiti Dinar'],
['KYD', 'Cayman Islands Dollar'],
['KZT', 'Kazakhstani Tenge'],
['LAK', 'Laotian Kip'],
['LBP', 'Lebanese Pound'],
['LKR', 'Sri Lankan Rupee'],
['LRD', 'Liberian Dollar'],
['LSL', 'Lesotho Loti'],
['LTL', 'Lithuanian Litas'],
['LVL', 'Latvian Lats'],
['LYD', 'Libyan Dinar'],
['MAD', 'Moroccan Dirham'],
['MDL', 'Moldovan Leu'],
['MGA', 'Malagasy Ariary'],
['MKD', 'Macedonian Denar'],
['MMK', 'Myanma Kyat'],
['MNT', 'Mongolian Tugrik'],
['MOP', 'Macanese Pataca'],
['MRO', 'Mauritanian Ouguiya'],
['MUR', 'Mauritian Rupee']];

export const exch = {
  'AED': '0.121438',
  'AFN': '2.859945',
  'ALL': '3.769014',
  'AMD': '15.683688',
  'ANG': '0.05958',
  'AOA': '13.411497',
  'ARS': '3.845101',
  'AUD': '0.04671',
  'AWG': '0.059345',
  'AZN': '0.056336',
  'BAM': '0.061059',
  'BBD': '0.066748',
  'BDT': '2.857763',
  'BGN': '0.061271',
  'BHD': '0.012468',
  'BIF': '66.883246',
  'BMD': '0.033061',
  'BND': '0.045741',
  'BOB': '0.22728',
  'BRL': '0.168015',
  'BSD': '0.033059',
  'BTC': '9.49609e-7',
  'BTN': '2.537083',
  'BWP': '0.402176',
  'BYN': '0.111558',
  'BYR': '648.003771',
  'BZD': '0.066634',
  'CAD': '0.042577',
  'CDF': '65.626925',
  'CHF': '0.032701',
  'CLF': '0.001029',
  'CLP': '28.39944',
  'CNY': '0.220404',
  'COP': '133.882208',
  'CRC': '21.958318',
  'CUC': '0.033061',
  'CUP': '0.876128',
  'CVE': '3.467317',
  'CZK': '0.784386',
  'DJF': '5.875688',
  'DKK': '0.23325',
  'DOP': '1.82335',
  'DZD': '4.810565',
  'EGP': '0.611249',
  'ERN': '0.495921',
  'ETB': '1.699485',
  'EUR': '0.031344',
  'FJD': '0.071991',
  'FKP': '0.025412',
  'GBP': '0.026793',
  'GEL': '0.100343',
  'GGP': '0.025412',
  'GHS': '0.248788',
  'GIP': '0.025412',
  'GMD': '1.779532',
  'GNF': '292.511013',
  'GTQ': '0.25348',
  'GYD': '6.918612',
  'HKD': '0.259527',
  'HNL': '0.808364',
  'HRK': '0.236161',
  'HTG': '3.636478',
  'HUF': '11.973205',
  'IDR': '479.345912',
  'ILS': '0.112455',
  'IMP': '0.025412',
  'INR': '2.544243',
  'IQD': '48.269669',
  'IRR': '1396.844876',
  'ISK': '4.352548',
  'JEP': '0.025412',
  'JMD': '5.115431',
  'JOD': '0.023442',
  'JPY': '4.316764',
  'KES': '3.835136',
  'KGS': '2.714389',
  'KHR': '134.064057',
  'KMF': '15.427285',
  'KPW': '29.755279',
  'KRW': '42.025702',
  'KWD': '0.010153',
  'KYD': '0.027549',
  'KZT': '14.523685',
  'LAK': '419.384085',
  'LBP': '50.154181',
  'LKR': '11.735696',
  'LRD': '4.975868',
  'LSL': '0.528665',
  'LTL': '0.097622',
  'LVL': '0.019999',
  'LYD': '0.158377',
  'MAD': '0.330432',
  'MDL': '0.620831',
  'MGA': '132.444048',
  'MKD': '1.924551',
  'MMK': '61.209459',
  'MNT': '99.014421',
  'MOP': '0.267287',
  'MRO': '11.80292',
  'MUR': '1.430489',
  'MVR': '0.511142',
  'MWK': '26.928648',
  'MXN': '0.667325',
  'MYR': '0.144491',
  'MZN': '2.110323',
  'NAD': '0.528665',
  'NGN': '13.726782',
  'NIO': '1.182619',
  'NOK': '0.313069',
  'NPR': '4.059395',
  'NZD': '0.051585',
  'OMR': '0.012735',
  'PAB': '0.033058',
  'PEN': '0.12522',
  'PGK': '0.116058',
  'PHP': '1.73227',
  'PKR': '6.169383',
  'PLN': '0.1478',
  'PYG': '225.712643',
  'QAR': '0.120378',
  'RON': '0.155125',
  'RSD': '3.686437',
  'RUB': '2.198706',
  'RWF': '33.722645',
  'SAR': '0.12401',
  'SBD': '0.266949',
  'SCR': '0.428771',
  'SDG': '14.795106',
  'SEK': '0.328991',
  'SGD': '0.045803',
  'SHP': '0.045539',
  'SLL': '229.975227',
  'SOS': '19.175633',
  'SRD': '0.688935',
  'STD': '684.304579',
  'SVC': '0.289246',
  'SYP': '83.06514',
  'SZL': '0.528664',
  'THB': '1.135341',
  'TJS': '0.411729',
  'TMT': '0.115715',
  'TND': '0.101103',
  'TOP': '0.076631',
  'TRY': '0.494104',
  'TTD': '0.224264',
  'TWD': '0.980669',
  'TZS': '76.867805',
  'UAH': '1',
  'UGX': '117.751367',
  'USD': '0.033061',
  'UYU': '1.364491',
  'UZS': '368.221651',
  'VEF': '7069530126.547045',
  'VND': '758.974417',
  'VUV': '3.722109',
  'WST': '0.085478',
  'XAF': '20.479209',
  'XAG': '0.001479',
  'XAU': '0.000017555139',
  'XCD': '0.08935',
  'XDR': '0.02458',
  'XOF': '20.646974',
  'XPF': '3.754136',
  'YER': '8.273632',
  'ZAR': '0.531258',
  'ZMK': '297.592545',
  'ZMW': '0.561989',
  'ZWL': '10.645763'
};
