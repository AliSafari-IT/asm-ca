---
sidebar_position: 3
title: Applications
---

### Applications of XML

XML is widely used in various fields, including web development, data storage, data exchange, and configuration files. It is often used with other technologies such as XSLT (Extensible Stylesheet Language Transformations) and XPath (XML Path Language) for transforming and querying XML data.

### Example

Below is an example of an XML document and an XSLT stylesheet that transforms the XML data into HTML:

XML Document (example.xml):
```xml
<Catalog>
  <Book>
    <Title>The Great Gatsby</Title>
    <Author>F. Scott Fitzgerald</Author>
    <Year>1925</Year>
  </Book>
  <Book>
    <Title>1984</Title>
    <Author>George Orwell</Author>
    <Year>1949</Year>
  </Book>
</Catalog>
```

XSLT Stylesheet (transform.xslt):

```xslt
<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
    xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    
  <xsl:template match="/">
    <html>
    <body>
      <h2>Book Catalog</h2>
      <table border="1">
        <tr bgcolor="#9acd32">
          <th>Title</th>
          <th>Author</th>
          <th>Year</th>
        </tr>
        <xsl:for-each select="Catalog/Book">
          <tr>
            <td><xsl:value-of select="Title"/></td>
            <td><xsl:value-of select="Author"/></td>
            <td><xsl:value-of select="Year"/></td>
          </tr>
        </xsl:for-each>
      </table>
    </body>
    </html>
  </xsl:template>

</xsl:stylesheet>

```

**In this example:**

When the XSLT is applied to the XML, it produces an HTML output displaying the book catalog in a tabular format. This demonstrates how XSLT can be used to convert XML data into a different format, such as a web page.