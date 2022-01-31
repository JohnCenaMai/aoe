import mongoose from 'mongoose';

var mappingConfigSchema = mongoose.Schema({
	agencyCode: String,
	contentType: String,
	url: String,
	authorizationValue: String,
	authorizationType: String,
	config: {
		taxCode: String,
		typeOfBill: String,
		kyHieuMauHoaDon: String,
		kyHieuHoaDon: String,
		billCode: String,
		originBill: String,
		invoiceFoundingDate: String,
		customersTaxCode: String,
		organizationName: String,
		customerName: String,
		customerAddress: String,
		customerPhoneNumber: String,
		customerEmail: String,
		payMethod: String,
		payMethodName: String,
		accountNumber: String,
		bankName: String,
		currency: String,
		exchangeRate: String,
		paymentTerm: String,
		discount: String,
		note: String,
		total: String,
		paymentTotal: String,
		creator: String,
		taxTotal: String,
		detail: [
			{
				order: String,
				goodsType: String,
				promotion: String,
				goodsCode: String,
				goodsName: String,
				unit: String,
				quantily: String,
				price: String,
				discountPercent: String,
				discountTotal: String,
				otherFeeRate: String,
				otherFeeMoney: String,
				totalBeforeTax: String,
				vat: String,
				totalAfterTax: String
			}
		]
	}
});

export default mappingConfigSchema;