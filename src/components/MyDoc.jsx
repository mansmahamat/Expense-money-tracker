import React from 'react';
import { Page, Text, View, Document, StyleSheet, Font, Image } from '@react-pdf/renderer';



// Create styles
const styles = StyleSheet.create({
    body: {
        paddingTop: 35,
        paddingBottom: 65,
        paddingHorizontal: 35,
      },
      header: {
        fontSize: 12,
        marginBottom: 15,
        textAlign: 'center',
        color: 'grey',
      },
      title: {
        fontSize: 24,
        textAlign: 'center',
        fontFamily: 'Oswald',
        textDecoration: 'underline'
      },
      title2: {
        fontSize: 18,
        textAlign: 'center',
        fontFamily: 'Oswald',
        marginTop : 18,
        border : "1px solid red"
      },
      image: {
        marginVertical: 15,
        marginHorizontal: 100,
      },
      list: {
        color : 'black',
      },
      income: {
        fontSize: 18,
        textAlign: 'center',
        fontFamily: 'Oswald',
        marginTop : 18,
        color : 'green'
      },
      expense: {
        fontSize: 18,
        textAlign: 'center',
        fontFamily: 'Oswald',
        marginTop : 18,
        color : 'red'
      },
      text: {
        margin: 12,
        fontSize: 14,
        textAlign: 'justify',
        fontFamily: 'Times-Roman'
      },
      section: { color: '#4fd1c5', textAlign: 'center', margin: 30 }
});

const date = new Date();


Font.register({
    family: 'Oswald',
    src: 'https://fonts.gstatic.com/s/oswald/v13/Y_TKV6o8WovbUd3m_X9aAA.ttf'
  });

// Create Document Component
const MyDoc = (props) => (
    
  <Document>
    <Page size="A4" style={styles.body}>
      <View style={styles.section}>
        <Text style={styles.header} fixed>
            <p>{date.toLocaleDateString()}</p>
        </Text>
       

        <Image
        style={styles.image}
        src="https://i.ibb.co/y6dw1xG/mony-1.png"
      />

        <Text style={styles.title}>Your Budget</Text>

        <Text style={styles.title2}> Total :  {props.total} € </Text>
        <Text style={styles.expense}> Expenses :  {props.expense} € </Text>
        <Text style={styles.income}> Incomes :  {props.income} € </Text>
     
        <View style={styles.section}>  
            <Text style={styles.header} fixed>
                Historic : 
            </Text>
          {props.transaction.map(transac => (
              <Text  key={transac.id} style={styles.list}  > 
                 {transac.text} :  {transac.amount} €  ( {transac.date} )
           
                                   
                </Text>
             
            ))} 
        </View>
      </View>
    </Page>
  </Document>
);
 
export default MyDoc;