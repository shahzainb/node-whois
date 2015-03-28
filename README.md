# Node WhoIs
A simple API to get WhoIs information of a domain.

## Installation
```
git clone git@github.com:shahzainb/node-whois.git
npm install
npm run babel
nodemon api.js
```

## Usage
Requesting `http://localhost:3030/api/whois/google.com`

returns

```
{
    "disclaimer": "TERMS OF USE: You are not authorized to access or query our Whois database through the use of electronic processes that are high-volume and automated except as reasonably necessary to register domain names or modify existing registrations; the Data in VeriSign Global Registry Services' (\"VeriSign\") Whois database is provided by VeriSign for information purposes only, and to assist persons in obtaining information about or related to a domain name registration record. VeriSign does not guarantee its accuracy. By submitting a Whois query, you agree to abide by the following terms of use: You agree that you may use this Data only for lawful purposes and that under no circumstances will you use this Data to: (1) allow, enable, or otherwise support the transmission of mass unsolicited, commercial advertising or solicitations via e-mail, telephone, or facsimile; or (2) enable high volume, automated, electronic processes that apply to VeriSign (or its computer systems). The compilation, repackaging, dissemination or other use of this Data is expressly prohibited without the prior written consent of VeriSign. You agree not to use electronic processes that are automated and high-volume to access or query the Whois database except as reasonably necessary to register domain names or modify existing registrations. VeriSign reserves the right to restrict your access to the Whois database in its sole discretion to ensure operational stability.  VeriSign may restrict or terminate your access to the Whois database for failure to abide by these terms of use. VeriSign reserves the right to modify these terms at any time.",
    "domain": "google.com",
    "domain_id": "2138514_DOMAIN_COM-VRSN",
    "status": "registered",
    "available?": false,
    "registered?": true,
    "created_on": "1997-09-15T07:00:00.000+00:00",
    "updated_on": "2014-10-28T19:38:28.000+00:00",
    "expires_on": "2020-09-14T04:00:00.000+00:00",
    "registrar": {
        "id": "292",
        "name": "MarkMonitor, Inc.",
        "organization": "MarkMonitor, Inc.",
        "url": "http://www.markmonitor.com"
    },
    "registrant_contacts": [
        {
            "id": null,
            "type": 1,
            "name": "Dns Admin",
            "organization": "Google Inc.",
            "address": "Please contact contact-admin@google.com, 1600 Amphitheatre Parkway",
            "city": "Mountain View",
            "zip": "94043",
            "state": "CA",
            "country": null,
            "country_code": "US",
            "phone": "+1.6502530000",
            "fax": "+1.6506188571",
            "email": "dns-admin@google.com",
            "url": null,
            "created_on": null,
            "updated_on": null
        }
    ],
    "admin_contacts": [
        {
            "id": null,
            "type": 2,
            "name": "DNS Admin",
            "organization": "Google Inc.",
            "address": "1600 Amphitheatre Parkway",
            "city": "Mountain View",
            "zip": "94043",
            "state": "CA",
            "country": null,
            "country_code": "US",
            "phone": "+1.6506234000",
            "fax": "+1.6506188571",
            "email": "dns-admin@google.com",
            "url": null,
            "created_on": null,
            "updated_on": null
        }
    ],
    "technical_contacts": [
        {
            "id": null,
            "type": 3,
            "name": "DNS Admin",
            "organization": "Google Inc.",
            "address": "2400 E. Bayshore Pkwy",
            "city": "Mountain View",
            "zip": "94043",
            "state": "CA",
            "country": null,
            "country_code": "US",
            "phone": "+1.6503300100",
            "fax": "+1.6506181499",
            "email": "dns-admin@google.com",
            "url": null,
            "created_on": null,
            "updated_on": null
        }
    ],
    "nameservers": [
        {
            "name": "ns3.google.com",
            "ipv4": null,
            "ipv6": null
        },
        {
            "name": "ns4.google.com",
            "ipv4": null,
            "ipv6": null
        },
        {
            "name": "ns2.google.com",
            "ipv4": null,
            "ipv6": null
        },
        {
            "name": "ns1.google.com",
            "ipv4": null,
            "ipv6": null
        }
    ],
    "raw": "\nWhois Server Version 2.0\n\nDomain names in the .com and .net domains can now be registered\nwith many different competing registrars. Go to http://www.internic.net\nfor detailed information.\n\nAborting search 50 records found .....\n   Server Name: GOOGLE.COM.87937.COM\n   IP Address: 91.218.229.20\n   Registrar: REGISTRAR OF DOMAIN NAMES REG.RU LLC\n   Whois Server: whois.reg.ru\n   Referral URL: http://www.reg.ru\n\n   Server Name: GOOGLE.COM.AFRICANBATS.ORG\n   Registrar: TUCOWS DOMAINS INC.\n   Whois Server: whois.tucows.com\n   Referral URL: http://www.tucowsdomains.com\n\n   Server Name: GOOGLE.COM.AR\n   Registrar: ENOM, INC.\n   Whois Server: whois.enom.com\n   Referral URL: http://www.enom.com\n\n   Server Name: GOOGLE.COM.AU\n   Registrar: PLANETDOMAIN PTY LTD.\n   Whois Server: whois.planetdomain.com\n   Referral URL: http://www.planetdomain.com\n\n   Server Name: GOOGLE.COM.BAISAD.COM\n   IP Address: 91.218.229.20\n   Registrar: REGISTRAR OF DOMAIN NAMES REG.RU LLC\n   Whois Server: whois.reg.ru\n   Referral URL: http://www.reg.ru\n\n   Server Name: GOOGLE.COM.BEYONDWHOIS.COM\n   IP Address: 203.36.226.2\n   Registrar: INSTRA CORPORATION PTY, LTD.\n   Whois Server: whois.instra.net\n   Referral URL: http://www.instra.com\n\n   Server Name: GOOGLE.COM.BR\n   Registrar: ENOM, INC.\n   Whois Server: whois.enom.com\n   Referral URL: http://www.enom.com\n\n   Server Name: GOOGLE.COM.CN\n   Registrar: XIN NET TECHNOLOGY CORPORATION\n   Whois Server: whois.paycenter.com.cn\n   Referral URL: http://www.xinnet.com\n\n   Server Name: GOOGLE.COM.CO\n   Registrar: NAMESECURE.COM\n   Whois Server: whois.namesecure.com\n   Referral URL: http://www.namesecure.com\n\n   Server Name: GOOGLE.COM.DO\n   Registrar: GODADDY.COM, LLC\n   Whois Server: whois.godaddy.com\n   Referral URL: http://registrar.godaddy.com\n\n   Server Name: GOOGLE.COM.FORSALE\n   Registrar: NAMESILO, LLC\n   Whois Server: whois.namesilo.com\n   Referral URL: http://www.namesilo.com\n\n   Server Name: GOOGLE.COM.HACKED.BY.JAPTRON.ES\n   Registrar: GODADDY.COM, LLC\n   Whois Server: whois.godaddy.com\n   Referral URL: http://registrar.godaddy.com\n\n   Server Name: GOOGLE.COM.HANNAHJESSICA.COM\n   IP Address: 216.239.32.10\n   Registrar: VITALWERKS INTERNET SOLUTIONS LLC DBA NO-IP\n   Whois Server: whois.no-ip.com\n   Referral URL: http://www.no-ip.com\n\n   Server Name: GOOGLE.COM.HAS.LESS.FREE.PORN.IN.ITS.SEARCH.ENGINE.THAN.SECZY.COM\n   IP Address: 209.187.114.130\n   Registrar: TUCOWS DOMAINS INC.\n   Whois Server: whois.tucows.com\n   Referral URL: http://www.tucowsdomains.com\n\n   Server Name: GOOGLE.COM.HK\n   Registrar: UK-2 LIMITED\n   Whois Server: whois.hostingservicesinc.net\n   Referral URL: http://www.uk2group.com\n\n   Server Name: GOOGLE.COM.IS.APPROVED.BY.NUMEA.COM\n   IP Address: 213.228.0.43\n   Registrar: GANDI SAS\n   Whois Server: whois.gandi.net\n   Referral URL: http://www.gandi.net\n\n   Server Name: GOOGLE.COM.IS.HOSTED.ON.PROFITHOSTING.NET\n   IP Address: 66.49.213.213\n   Registrar: NAME.COM, INC.\n   Whois Server: whois.name.com\n   Referral URL: http://www.name.com\n\n   Server Name: GOOGLE.COM.IS.NOT.HOSTED.BY.ACTIVEDOMAINDNS.NET\n   IP Address: 217.148.161.5\n   Registrar: HOSTING CONCEPTS B.V. D/B/A OPENPROVIDER\n   Whois Server: whois.registrar.eu\n   Referral URL: http://www.openprovider.com\n\n   Server Name: GOOGLE.COM.LASERPIPE.COM\n   IP Address: 209.85.227.106\n   Registrar: REALTIME REGISTER BV\n   Whois Server: whois.yoursrs.com\n   Referral URL: http://www.realtimeregister.com\n\n   Server Name: GOOGLE.COM.LOLOLOLOLOL.SHTHEAD.COM\n   IP Address: 123.123.123.123\n   Registrar: CRAZY DOMAINS FZ-LLC\n   Whois Server: whois.crazydomains.com\n   Referral URL: http://www.crazydomains.com \n\n   Server Name: GOOGLE.COM.LYRIDZ.COM\n   IP Address: 46.137.212.139\n   Registrar: GODADDY.COM, LLC\n   Whois Server: whois.godaddy.com\n   Referral URL: http://registrar.godaddy.com\n\n   Server Name: GOOGLE.COM.MX\n   Registrar: PDR LTD. D/B/A PUBLICDOMAINREGISTRY.COM\n   Whois Server: whois.PublicDomainRegistry.com\n   Referral URL: http://www.PublicDomainRegistry.com\n\n   Server Name: GOOGLE.COM.MY\n   Registrar: WILD WEST DOMAINS, LLC\n   Whois Server: whois.wildwestdomains.com\n   Referral URL: http://www.wildwestdomains.com\n\n   Server Name: GOOGLE.COM.NS1.CHALESHGAR.COM\n   IP Address: 8.8.8.8\n   Registrar: ENOM, INC.\n   Whois Server: whois.enom.com\n   Referral URL: http://www.enom.com\n\n   Server Name: GOOGLE.COM.NS2.CHALESHGAR.COM\n   IP Address: 8.8.8.8\n   Registrar: ENOM, INC.\n   Whois Server: whois.enom.com\n   Referral URL: http://www.enom.com\n\n   Server Name: GOOGLE.COM.PE\n   Registrar: PDR LTD. D/B/A PUBLICDOMAINREGISTRY.COM\n   Whois Server: whois.PublicDomainRegistry.com\n   Referral URL: http://www.PublicDomainRegistry.com\n\n   Server Name: GOOGLE.COM.PK\n   Registrar: BIGROCK SOLUTIONS LIMITED\n   Whois Server: Whois.bigrock.com\n   Referral URL: http://www.bigrock.com\n\n   Server Name: GOOGLE.COM.RAINGUTTERPRO.COM\n   IP Address: 2001:4860:4860:0:0:0:0:8888\n   Registrar: GODADDY.COM, LLC\n   Whois Server: whois.godaddy.com\n   Referral URL: http://registrar.godaddy.com\n\n   Server Name: GOOGLE.COM.SA\n   Registrar: OMNIS NETWORK, LLC\n   Whois Server: whois.omnis.com\n   Referral URL: http://www.omnis.com\n\n   Server Name: GOOGLE.COM.SHQIPERIA.COM\n   IP Address: 70.84.145.107\n   Registrar: ENOM, INC.\n   Whois Server: whois.enom.com\n   Referral URL: http://www.enom.com\n\n   Server Name: GOOGLE.COM.SOUTHBEACHNEEDLEARTISTRY.COM\n   IP Address: 74.125.229.52\n   Registrar: GODADDY.COM, LLC\n   Whois Server: whois.godaddy.com\n   Referral URL: http://registrar.godaddy.com\n\n   Server Name: GOOGLE.COM.SPAMMING.IS.UNETHICAL.PLEASE.STOP.THEM.HUAXUEERBAN.COM\n   IP Address: 211.64.175.66\n   IP Address: 211.64.175.67\n   Registrar: GODADDY.COM, LLC\n   Whois Server: whois.godaddy.com\n   Referral URL: http://registrar.godaddy.com\n\n   Server Name: GOOGLE.COM.SPROSIUYANDEKSA.RU\n   Registrar: MELBOURNE IT, LTD. D/B/A INTERNET NAMES WORLDWIDE\n   Whois Server: whois.melbourneit.com\n   Referral URL: http://www.melbourneit.com\n\n   Server Name: GOOGLE.COM.SUCKS.FIND.CRACKZ.WITH.SEARCH.GULLI.COM\n   IP Address: 80.190.192.24\n   Registrar: COREHUB, S.R.L.\n   Whois Server: whois.corehub.net\n   Referral URL: http://www.corehub.net\n\n   Server Name: GOOGLE.COM.TESTZZZZ.3000-RI.COM\n   IP Address: 8.8.8.8\n   Registrar: MEGAZONE CORP. DBA HOSTING.KR\n   Whois Server: whois.hosting.kr\n   Referral URL: http://www.hosting.kr\n\n   Server Name: GOOGLE.COM.TR\n   Registrar: PDR LTD. D/B/A PUBLICDOMAINREGISTRY.COM\n   Whois Server: whois.PublicDomainRegistry.com\n   Referral URL: http://www.PublicDomainRegistry.com\n\n   Server Name: GOOGLE.COM.TW\n   Registrar: WEB COMMERCE COMMUNICATIONS LIMITED DBA WEBNIC.CC\n   Whois Server: whois.webnic.cc\n   Referral URL: http://www.webnic.cc\n\n   Server Name: GOOGLE.COM.UA\n   Registrar: PDR LTD. D/B/A PUBLICDOMAINREGISTRY.COM\n   Whois Server: whois.PublicDomainRegistry.com\n   Referral URL: http://www.PublicDomainRegistry.com\n\n   Server Name: GOOGLE.COM.UK\n   Registrar: WEBFUSION LTD.\n   Whois Server: whois.123-reg.co.uk\n   Referral URL: http://www.123-reg.co.uk\n\n   Server Name: GOOGLE.COM.UY\n   Registrar: PDR LTD. D/B/A PUBLICDOMAINREGISTRY.COM\n   Whois Server: whois.PublicDomainRegistry.com\n   Referral URL: http://www.PublicDomainRegistry.com\n\n   Server Name: GOOGLE.COM.VABDAYOFF.COM\n   IP Address: 8.8.8.8\n   Registrar: DOMAIN.COM, LLC\n   Whois Server: whois.domain.com\n   Referral URL: http://www.domain.com\n\n   Server Name: GOOGLE.COM.VN\n   Registrar: ONLINENIC, INC.\n   Whois Server: whois.onlinenic.com\n   Referral URL: http://www.OnlineNIC.com\n\n   Server Name: GOOGLE.COM.WORDT.DOOR.VEEL.WHTERS.GEBRUIKT.SERVERTJE.NET\n   IP Address: 62.41.27.144\n   Registrar: KEY-SYSTEMS GMBH\n   Whois Server: whois.rrpproxy.net\n   Referral URL: http://www.key-systems.net\n\n   Server Name: GOOGLE.COM.YUCEHOCA.COM\n   IP Address: 88.246.115.134\n   Registrar: PDR LTD. D/B/A PUBLICDOMAINREGISTRY.COM\n   Whois Server: whois.PublicDomainRegistry.com\n   Referral URL: http://www.PublicDomainRegistry.com\n\n   Server Name: GOOGLE.COM.YUCEKIRBAC.COM\n   IP Address: 88.246.115.134\n   Registrar: PDR LTD. D/B/A PUBLICDOMAINREGISTRY.COM\n   Whois Server: whois.PublicDomainRegistry.com\n   Referral URL: http://www.PublicDomainRegistry.com\n\n   Server Name: GOOGLE.COM.ZNAET.PRODOMEN.COM\n   IP Address: 62.149.23.126\n   Registrar: PDR LTD. D/B/A PUBLICDOMAINREGISTRY.COM\n   Whois Server: whois.PublicDomainRegistry.com\n   Referral URL: http://www.PublicDomainRegistry.com\n\n   Server Name: GOOGLE.COM.ZZZZZ.GET.LAID.AT.WWW.SWINGINGCOMMUNITY.COM\n   IP Address: 69.41.185.195\n   Registrar: TUCOWS DOMAINS INC.\n   Whois Server: whois.tucows.com\n   Referral URL: http://www.tucowsdomains.com\n\n   Server Name: GOOGLE.COM.ZZZZZZZZZZZZZ.GET.ONE.MILLION.DOLLARS.AT.WWW.UNIMUNDI.COM\n   IP Address: 209.126.190.70\n   Registrar: PDR LTD. D/B/A PUBLICDOMAINREGISTRY.COM\n   Whois Server: whois.PublicDomainRegistry.com\n   Referral URL: http://www.PublicDomainRegistry.com\n\n   Server Name: GOOGLE.COM.ZZZZZZZZZZZZZZZZZZZZ.LOLLERSKATES.RENDRAG.NET\n   IP Address: 103.235.52.4\n   Registrar: ENOM, INC.\n   Whois Server: whois.enom.com\n   Referral URL: http://www.enom.com\n\n   Domain Name: GOOGLE.COM\n   Registrar: MARKMONITOR INC.\n   Sponsoring Registrar IANA ID: 292\n   Whois Server: whois.markmonitor.com\n   Referral URL: http://www.markmonitor.com\n   Name Server: NS1.GOOGLE.COM\n   Name Server: NS2.GOOGLE.COM\n   Name Server: NS3.GOOGLE.COM\n   Name Server: NS4.GOOGLE.COM\n   Status: clientDeleteProhibited http://www.icann.org/epp#clientDeleteProhibited\n   Status: clientTransferProhibited http://www.icann.org/epp#clientTransferProhibited\n   Status: clientUpdateProhibited http://www.icann.org/epp#clientUpdateProhibited\n   Status: serverDeleteProhibited http://www.icann.org/epp#serverDeleteProhibited\n   Status: serverTransferProhibited http://www.icann.org/epp#serverTransferProhibited\n   Status: serverUpdateProhibited http://www.icann.org/epp#serverUpdateProhibited\n   Updated Date: 20-jul-2011\n   Creation Date: 15-sep-1997\n   Expiration Date: 14-sep-2020\n\n>>> Last update of whois database: Sat, 28 Mar 2015 22:27:34 GMT <<<\n\nNOTICE: The expiration date displayed in this record is the date the \nregistrar's sponsorship of the domain name registration in the registry is \ncurrently set to expire. This date does not necessarily reflect the expiration \ndate of the domain name registrant's agreement with the sponsoring \nregistrar.  Users may consult the sponsoring registrar's Whois database to \nview the registrar's reported date of expiration for this registration.\n\nTERMS OF USE: You are not authorized to access or query our Whois \ndatabase through the use of electronic processes that are high-volume and \nautomated except as reasonably necessary to register domain names or \nmodify existing registrations; the Data in VeriSign Global Registry \nServices' (\"VeriSign\") Whois database is provided by VeriSign for \ninformation purposes only, and to assist persons in obtaining information \nabout or related to a domain name registration record. VeriSign does not \nguarantee its accuracy. By submitting a Whois query, you agree to abide \nby the following terms of use: You agree that you may use this Data only \nfor lawful purposes and that under no circumstances will you use this Data \nto: (1) allow, enable, or otherwise support the transmission of mass \nunsolicited, commercial advertising or solicitations via e-mail, telephone, \nor facsimile; or (2) enable high volume, automated, electronic processes \nthat apply to VeriSign (or its computer systems). The compilation, \nrepackaging, dissemination or other use of this Data is expressly \nprohibited without the prior written consent of VeriSign. You agree not to \nuse electronic processes that are automated and high-volume to access or \nquery the Whois database except as reasonably necessary to register \ndomain names or modify existing registrations. VeriSign reserves the right \nto restrict your access to the Whois database in its sole discretion to ensure \noperational stability.  VeriSign may restrict or terminate your access to the \nWhois database for failure to abide by these terms of use. VeriSign \nreserves the right to modify these terms at any time. \n\nThe Registry database contains ONLY .COM, .NET, .EDU domains and\nRegistrars.\n\nFor more information on Whois status codes, please visit \nhttps://www.icann.org/resources/pages/epp-status-codes-2014-06-16-en.\n\nDomain Name: google.com\nRegistry Domain ID: 2138514_DOMAIN_COM-VRSN\nRegistrar WHOIS Server: whois.markmonitor.com\nRegistrar URL: http://www.markmonitor.com\nUpdated Date: 2014-10-28T12:38:28-0700\nCreation Date: 1997-09-15T00:00:00-0700\nRegistrar Registration Expiration Date: 2020-09-13T21:00:00-0700\nRegistrar: MarkMonitor, Inc.\nRegistrar IANA ID: 292\nRegistrar Abuse Contact Email: abusecomplaints@markmonitor.com\nRegistrar Abuse Contact Phone: +1.2083895740\nDomain Status: clientUpdateProhibited (https://www.icann.org/epp#clientUpdateProhibited)\nDomain Status: clientTransferProhibited (https://www.icann.org/epp#clientTransferProhibited)\nDomain Status: clientDeleteProhibited (https://www.icann.org/epp#clientDeleteProhibited)\nRegistry Registrant ID: \nRegistrant Name: Dns Admin\nRegistrant Organization: Google Inc.\nRegistrant Street: Please contact contact-admin@google.com, 1600 Amphitheatre Parkway\nRegistrant City: Mountain View\nRegistrant State/Province: CA\nRegistrant Postal Code: 94043\nRegistrant Country: US\nRegistrant Phone: +1.6502530000\nRegistrant Phone Ext: \nRegistrant Fax: +1.6506188571\nRegistrant Fax Ext: \nRegistrant Email: dns-admin@google.com\nRegistry Admin ID: \nAdmin Name: DNS Admin\nAdmin Organization: Google Inc.\nAdmin Street: 1600 Amphitheatre Parkway\nAdmin City: Mountain View\nAdmin State/Province: CA\nAdmin Postal Code: 94043\nAdmin Country: US\nAdmin Phone: +1.6506234000\nAdmin Phone Ext: \nAdmin Fax: +1.6506188571\nAdmin Fax Ext: \nAdmin Email: dns-admin@google.com\nRegistry Tech ID: \nTech Name: DNS Admin\nTech Organization: Google Inc.\nTech Street: 2400 E. Bayshore Pkwy\nTech City: Mountain View\nTech State/Province: CA\nTech Postal Code: 94043\nTech Country: US\nTech Phone: +1.6503300100\nTech Phone Ext: \nTech Fax: +1.6506181499\nTech Fax Ext: \nTech Email: dns-admin@google.com\nName Server: ns3.google.com\nName Server: ns4.google.com\nName Server: ns2.google.com\nName Server: ns1.google.com\nDNSSEC: unsigned\nURL of the ICANN WHOIS Data Problem Reporting System: http://wdprs.internic.net/\n>>> Last update of WHOIS database: 2015-03-28T15:21:35-0700 <<<\n\nThe Data in MarkMonitor.com's WHOIS database is provided by MarkMonitor.com for\ninformation purposes, and to assist persons in obtaining information about or\nrelated to a domain name registration record.  MarkMonitor.com does not guarantee\nits accuracy.  By submitting a WHOIS query, you agree that you will use this Data\nonly for lawful purposes and that, under no circumstances will you use this Data to:\n (1) allow, enable, or otherwise support the transmission of mass unsolicited,\n     commercial advertising or solicitations via e-mail (spam); or\n (2) enable high volume, automated, electronic processes that apply to\n     MarkMonitor.com (or its systems).\nMarkMonitor.com reserves the right to modify these terms at any time.\nBy submitting this query, you agree to abide by this policy.\n\nMarkMonitor is the Global Leader in Online Brand Protection.\n\nMarkMonitor Domain Management(TM)\nMarkMonitor Brand Protection(TM)\nMarkMonitor AntiPiracy(TM)\nMarkMonitor AntiFraud(TM)\nProfessional and Managed Services\n\nVisit MarkMonitor at http://www.markmonitor.com\nContact us at +1.8007459229\nIn Europe, at +44.02032062220\n--\n"
}
```

Requesting `http://localhost:3030/api/whois/expiration/google.com

returns

```
{
    "domain": "google.com",
    "expiryDate": "2020-09-14T04:00:00.000+00:00"
}
```
##License
MIT
