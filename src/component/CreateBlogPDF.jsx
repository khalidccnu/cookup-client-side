import React from "react";
import { StyleSheet, Document, Page, View, Text } from "@react-pdf/renderer";

const CreateBlogPDF = () => {
  const style = StyleSheet.create({
    page: {
      display: "flex",
      flexDirection: "column",
      backgroundColor: "#e4e4e4",
    },
    section: {
      display: "flex",
      flexDirection: "column",
      margin: "1in",
    },
    question: {
      display: "flex",
      flexDirection: "row",
    },
    answer: {
      display: "flex",
      flexDirection: "column",
      paddingTop: 5,
      paddingLeft: 20,
    },
    li: {
      display: "flex",
      flexDirection: "row",
    },
    number: {
      marginRight: 5,
    },
    bulletPoint: {
      marginRight: 5,
    },
    divider: {
      marginTop: "0.2in",
    },
  });

  return (
    <Document>
      <Page size="A4" style={style.page} wrap={false}>
        <View style={style.section}>
          <View>
            <View style={style.question}>
              <Text style={style.number}>1.</Text>
              <Text>
                Tell us the differences between controlled and uncontrolled
                component.
              </Text>
            </View>
            <View style={style.answer}>
              <View style={style.li}>
                <Text style={style.bulletPoint}>•</Text>
                <Text>
                  Controlled component does not maintain its internal state. But
                  uncontrolled component maintains its internal state.
                </Text>
              </View>
              <View style={style.li}>
                <Text style={style.bulletPoint}>•</Text>
                <Text>
                  Controlled component data is controlled by the parent
                  component. But uncontrolled component data is controlled by
                  the DOM itself.
                </Text>
              </View>
              <View style={style.li}>
                <Text style={style.bulletPoint}>•</Text>
                <Text>
                  Controlled component accepts its current value as a prop. But
                  uncontrolled component uses a ref for their current values.
                </Text>
              </View>
            </View>
          </View>
          <View style={style.divider}>
            <View style={style.question}>
              <Text style={style.number}>2.</Text>
              <Text>How to validate React props using PropTypes?</Text>
            </View>
            <View style={style.answer}>
              <Text>
                In React, PropTypes is a library that allows to validate the
                types of props passed to a component. First, it will be needed
                to add a proptypes object to component, then define the
                PropTypes for each prop that component expects like string,
                number, boolean etc. Last pass props to component. If a prop
                doesn't match the specified data type or if a required prop is
                not passed, React will throw an error. Using PropTypes can help
                to catch these errors early in the development process, making
                code more reliable and easier to maintain.
              </Text>
            </View>
          </View>
          <View style={style.divider}>
            <View style={style.question}>
              <Text style={style.number}>3.</Text>
              <Text>
                Tell us the differences between Node.js and Express.js.
              </Text>
            </View>
            <View style={style.answer}>
              <View style={style.li}>
                <Text style={style.bulletPoint}>•</Text>
                <Text>
                  Node.js is used to build server-side, input-output,
                  event-driven apps. Other hand Express.js is used to build
                  web-apps using approaches and principles of Node.js.
                </Text>
              </View>
              <View style={style.li}>
                <Text style={style.bulletPoint}>•</Text>
                <Text>
                  Node.js have fewer features. But Express.js have more features
                  than Node.js.
                </Text>
              </View>
              <View style={style.li}>
                <Text style={style.bulletPoint}>•</Text>
                <Text>
                  Node.js is built on Google’s V8 engine. Other hand Express.js
                  is built on Node.js.
                </Text>
              </View>
            </View>
          </View>
          <View style={style.divider}>
            <View style={style.question}>
              <Text style={style.number}>4.</Text>
              <Text>
                What is a custom hook, and why will you create a custom hook?
              </Text>
            </View>
            <View style={style.answer}>
              <Text>
                A custom hook is a special JavaScript function whose name starts
                with 'use' and can be used to call other hooks. When we have
                component logic that needs to be used by multiple components,
                then we can extract that logic to a custom Hook.
              </Text>
            </View>
          </View>
        </View>
      </Page>
    </Document>
  );
};

export default CreateBlogPDF;
