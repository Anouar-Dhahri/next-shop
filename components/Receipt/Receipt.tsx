// components/Receipt/Receipt.tsx
import React from "react";
import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";
import dayjs from "dayjs";

// Define styles
const styles = StyleSheet.create({
  page: {
    backgroundColor: "#f3f4f6",
    padding: 20,
    fontFamily: "Helvetica",
  },
  header: {
    alignItems: "center",
    marginBottom: 20,
  },
  successIcon: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#22c55e",
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#111827",
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 12,
    color: "#6b7280",
    marginBottom: 15,
  },
  total: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
    color: "#111827",
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    gap: 10,
  },
  box: {
    width: "48%",
    padding: 10,
    borderRadius: 6,
    backgroundColor: "#fff",
    marginBottom: 10,
  },
  label: {
    fontSize: 10,
    color: "#6b7280",
    marginBottom: 4,
  },
  value: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#111827",
  },
});

type Props = {
  RefNumber: string;
  PaymentMethod: string;
  CustomerName: string;
  TotalPayment: string;
};

const Receipt = ({
  RefNumber,
  PaymentMethod,
  CustomerName,
  TotalPayment,
}: Props) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.header}>
        <View style={styles.successIcon} />
        <Text style={styles.title}>Payment Success!</Text>
        <Text style={styles.subtitle}>
          Your payment has been successfully done.
        </Text>
      </View>

      <Text style={styles.total}>${TotalPayment}</Text>

      <View style={styles.grid}>
        <View style={styles.box}>
          <Text style={styles.label}>Ref Number</Text>
          <Text style={styles.value}>{RefNumber}</Text>
        </View>

        <View style={styles.box}>
          <Text style={styles.label}>Payment Time</Text>
          <Text style={styles.value}>
            {dayjs().format("DD MMM YYYY, HH:mm")}
          </Text>
        </View>

        <View style={styles.box}>
          <Text style={styles.label}>Payment Method</Text>
          <Text style={styles.value}>{PaymentMethod}</Text>
        </View>

        <View style={styles.box}>
          <Text style={styles.label}>Customer Name</Text>
          <Text style={styles.value}>{CustomerName}</Text>
        </View>
      </View>
    </Page>
  </Document>
);

export default Receipt;
