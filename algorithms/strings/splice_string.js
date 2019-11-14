function splice(original, index, toremove, toInsret) {
  return original.slice(0, index) + toInsret + original.slice(index + toremove);
}



var original = `<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema">
<SOAP-ENV:Header>
    <wsse:Security xmlns:wsse="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd">
        <saml:Assertion/>
    </wsse:Security>
</SOAP-ENV:Header>
<SOAP-ENV:Body>
    <m:DPSretrieve xmlns:m="https://tpvs.hmrc.gov.uk/dps">
        <m:version>1</m:version>
        <m:vendorID>7896</m:vendorID>
        <m:service>PAYE</m:service>
        <m:entityType>EmpRef</m:entityType>
        <m:entity>399/A399</m:entity>
        <m:dataType>P6</m:dataType>
        <m:got>0</m:got>
        <m:nItems>10</m:nItems>
    </m:DPSretrieve>
</SOAP-ENV:Body>
</SOAP-ENV:Envelope>`;

var token = `<saml:Assertion xmlns="urn:oasis:names:tc:SAML:1.0:assertion" xmlns:saml="urn:oasis:names:tc:SAML:1.0:assertion" xmlns:samlp="urn:oasis:names:tc:SAML:1.0:protocol" AssertionID="bdcc41d3dd7ea9f3e351694fa73f3c6b" IssueInstant="2019-11-14T12:22:10.948Z" Issuer="http://online.hmrc.gov.uk/SAML" MajorVersion="1" MinorVersion="1"><saml:Conditions NotBefore="2019-11-14T12:22:10.948Z" NotOnOrAfter="2019-11-14T16:22:10.948Z"></saml:Conditions><saml:AuthenticationStatement AuthenticationInstant="2019-11-14T12:22:10.948Z" AuthenticationMethod="urn:oasis:names:tc:SAML:1.0:am:unspecified"><saml:Subject><saml:NameIdentifier Format="urn:oasis:names:tc:SAML:1.1:nameid-format:unspecified" NameQualifier="SubjectNameQualifier">SubjectName</saml:NameIdentifier><saml:SubjectConfirmation><saml:ConfirmationMethod>urn:oasis:names:tc:SAML:1.0:cm:sender-vouches</saml:ConfirmationMethod></saml:SubjectConfirmation></saml:Subject><saml:SubjectLocality IPAddress="41.235.6.58"></saml:SubjectLocality></saml:AuthenticationStatement><saml:AttributeStatement><saml:Subject><saml:NameIdentifier Format="urn:oasis:names:tc:SAML:1.1:nameid-format:unspecified" NameQualifier="SubjectNameQualifier">SubjectName</saml:NameIdentifier><saml:SubjectConfirmation><saml:ConfirmationMethod>urn:oasis:names:tc:SAML:1.0:cm:sender-vouches</saml:ConfirmationMethod></saml:SubjectConfirmation></saml:Subject><saml:Attribute AttributeName="SESSION_ID" AttributeNamespace="http://online.hmrc.gov.uk/SAML"><saml:AttributeValue>ffef246d-f598-4e86-ab46-9440b3732f3a</saml:AttributeValue></saml:Attribute><saml:Attribute AttributeName="USER_AUTHENTICATION_TOKEN" AttributeNamespace="http://online.hmrc.gov.uk/SAML"><saml:AttributeValue>zzWJK4TGTypzFcz5UZwIqgagiu8dsEqUCk2tp+bFzbDpzaPilbmxkxNSdyeHL2n+S+/kQYIjTpyEQLGsm2IhjGOiVOBmpIohp1T/fnIwJe3/qQs2utghYUbhd9/JhbWt6fA2waOwR+z0LL4bvBuimfYxJxmw/cD6wli+dmbZpsnWQRjlGHYWDo+9hi8h2DVEu3mYrjWvNw5th0HN+Y9JJA==</saml:AttributeValue></saml:Attribute></saml:AttributeStatement><ds:Signature xmlns:ds="http://www.w3.org/2000/09/xmldsig#"><ds:SignedInfo><ds:CanonicalizationMethod Algorithm="http://www.w3.org/2001/10/xml-exc-c14n#"></ds:CanonicalizationMethod><ds:SignatureMethod Algorithm="http://www.w3.org/2000/09/xmldsig#hmac-sha1"></ds:SignatureMethod><ds:Reference URI="#bdcc41d3dd7ea9f3e351694fa73f3c6b"><ds:Transforms><ds:Transform Algorithm="http://www.w3.org/2000/09/xmldsig#enveloped-signature"></ds:Transform><ds:Transform Algorithm="http://www.w3.org/2001/10/xml-exc-c14n#"><ec:InclusiveNamespaces xmlns:ec="http://www.w3.org/2001/10/xml-exc-c14n#" PrefixList="code ds kind rw saml samlp typens #default"></ec:InclusiveNamespaces></ds:Transform></ds:Transforms><ds:DigestMethod Algorithm="http://www.w3.org/2000/09/xmldsig#sha1"></ds:DigestMethod><ds:DigestValue>8D/rf7Hpe0yCQM1oRAzIKR6+L9A=</ds:DigestValue></ds:Reference></ds:SignedInfo><ds:SignatureValue>j5+5ATg5/ws4jf8jm4SfOSkan1s=</ds:SignatureValue></ds:Signature></saml:Assertion>`;


console.log(splice(original, original.indexOf('<saml:Assertion/>'), '<saml:Assertion/>'.length, 'md'));

