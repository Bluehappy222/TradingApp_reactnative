import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, Alert, BackHandler, Dimensions } from 'react-native';
import { Button } from 'react-native-paper';
import { LineChart } from 'react-native-chart-kit';
import { TvApiAdapter } from 'tradingview-api-adapter';

const adapter = new TvApiAdapter();
var priceHistory = [];
var chartData = {
    labels: [],
    datasets: [
      {
        data: [],
        color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // Line color
        strokeWidth: 2, // Line width
      },
    ],
  };

const MainDashboard = ({ navigation }) => {
  const [price, setPrice] = useState(null);

  const handleLogout = () => {
    Alert.alert(
      'Logout',
      'Are you sure you want to logout?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Logout',
          onPress: () => navigation.navigate('Login'),
        },
      ],
      { cancelable: false }
    );
  };

  const handleExit = () => {
    Alert.alert(
      'Exit',
      'Are you sure you want to exit the app?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Exit',
          onPress: () => BackHandler.exitApp(),
        },
      ],
      { cancelable: false }
    );
  };

  useEffect(() => {
    const quoteListener = adapter.Quote('BTCUSD', 'BINANCE', ['lp']).listen((data) => {
      const newprice = data.lp;
      setPrice(newprice);
      priceHistory.push(newprice);
      chartData.datasets[0].data = priceHistory.slice(); // Update chart data
    });

    return () => {
      quoteListener.unsubscribe();
    };
  }, []);

  const chartConfig = {
    backgroundGradientFrom: '#fff',
    backgroundGradientTo: '#fff',
    decimalPlaces: 2,
    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`, // Line color
    labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`, // Label color
    propsForDots: {
      r: '4',
      strokeWidth: '2',
      stroke: '#ffa726',
    },
  };

  const chartWidth = Dimensions.get('window').width * 0.9;
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Button onPress={handleLogout}>Logout</Button>
        <Button onPress={handleExit}>Exit</Button>
      </View>
      <LineChart
        data={chartData}
        width={chartWidth}
        height={200}
        yAxisLabel={'$'}
        chartConfig={chartConfig}
        bezier
        style={styles.chart}
        withHorizontalLabels={false}
      />
      <View style={styles.center}>
        <Text style={styles.text}>Current Price: {price} </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    position: 'absolute',
    top: 0,
    width: '100%',
    zIndex: 1,
  },
  center: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    fontSize:'20',
    width: '100%',
    textAlign: 'center',
  },
  chart: {
    top: '10%',
    marginVertical: 8,
    borderRadius: 16,
  },
});

export default MainDashboard;
