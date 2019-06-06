import React, { Component } from "react";
import { View, Image, Dimensions } from "react-native";
import {
  Container,
  Header,
  Content,
  List,
  ListItem,
  Thumbnail,
  Text,
  Button,
  Icon,
  Left,
  Body,
  Right
} from "native-base";
import AppStyle from "../AppStyle";
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from "react-native-chart-kit";
import { connect } from "react-redux";

class CoinsPrice extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const chartConfig = {
      backgroundGradientFrom: '#ffffff',
      backgroundGradientTo: '#ffffff',
      color: (opacity = 1) => `rgba(51, 51, 255, ${opacity})`,
      strokeWidth: 2 // optional, default 3
    }

    return (
      <Content>
        <List style={{ flex: 0 }}>
          <ListItem>
            <Thumbnail
              source={{
                uri:
                  "https://assets.coingecko.com/coins/images/975/large/cardano.png?1547034860"
              }}
            />
            <Body>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: "bold"
                }}
              >
                Cardano
              </Text>
            </Body>
          </ListItem>
          <ListItem itemDivider>
            <Left style={{ flex: 1 }} />
            <Body style={{ flex: 4 }}>
              <View style={AppStyle.priceList}>
                <Text>Fundamental Metrics</Text>
              </View>
            </Body>
            <Right style={{ flex: 1 }}>
              <Button transparent>
                <Icon name="help-circle" />
              </Button>
            </Right>
          </ListItem>
          <ListItem>
            <View style={AppStyle.priceList}>
              <ProgressChart
                data={[0.4, 0.6, 0.8]}
                width={Dimensions.get('window').width}
                height={220}
                chartConfig={chartConfig}
              />
            </View>
          </ListItem>
          <ListItem itemDivider>
            <Left style={{ flex: 1 }} />
            <Body style={{ flex: 4 }}>
              <View style={AppStyle.priceList}>
                <Text>Bitcoin Comparison Price</Text>
              </View>
            </Body>
            <Right style={{ flex: 1 }}>
              <Button transparent>
                <Icon name="help-circle" />
              </Button>
            </Right>
          </ListItem>
          <ListItem>
            <View style={AppStyle.priceList}>
              <Text style={AppStyle.priceNumber}>$94</Text>
            </View>
          </ListItem>
          <ListItem itemDivider>
            <Left style={{ flex: 1 }} />
            <Body style={{ flex: 4 }}>
              <View style={AppStyle.priceList}>
                <Text>Price per Coin</Text>
              </View>
            </Body>
            <Right style={{ flex: 1 }}>
              <Button transparent>
                <Icon name="help-circle" />
              </Button>
            </Right>
          </ListItem>
          <ListItem>
            <View style={AppStyle.priceList}>
              <Text style={AppStyle.priceNumber}>$0.0642</Text>
            </View>
          </ListItem>
          <ListItem itemDivider>
            <Left style={{ flex: 1 }} />
            <Body style={{ flex: 4 }}>
              <View style={AppStyle.priceList}>
                <Text>ADA per BTC</Text>
              </View>
            </Body>
            <Right style={{ flex: 1 }}>
              <Button transparent>
                <Icon name="help-circle" />
              </Button>
            </Right>
          </ListItem>
          <ListItem>
            <View style={AppStyle.priceList}>
              <Text style={AppStyle.priceNumber}>97943</Text>
            </View>
          </ListItem>
          <ListItem itemDivider>
            <Left style={{ flex: 1 }} />
            <Body style={{ flex: 4 }}>
              <View style={AppStyle.priceList}>
                <Text>Historical Price</Text>
              </View>
            </Body>
            <Right style={{ flex: 1 }}>
              <Button transparent>
                <Icon name="help-circle" />
              </Button>
            </Right>
          </ListItem>
          <ListItem>
            <Image
              style={{ width: "100%", height: 300, resizeMode: "contain" }}
              source={{
                uri:
                  "https://raw.githubusercontent.com/jesperlekland/react-native-svg-charts/master/screenshots/y-axis.png"
              }}
            />
          </ListItem>
          <ListItem itemDivider>
            <Left style={{ flex: 1 }} />
            <Body style={{ flex: 4 }}>
              <View style={AppStyle.priceList}>
                <Text>Coin Distribution</Text>
              </View>
            </Body>
            <Right style={{ flex: 1 }}>
              <Button transparent>
                <Icon name="help-circle" />
              </Button>
            </Right>
          </ListItem>
          <ListItem>
            <Image
              style={{ width: "100%", height: 300, resizeMode: "contain" }}
              source={{
                uri:
                  "https://raw.githubusercontent.com/jesperlekland/react-native-svg-charts/master/screenshots/pie-chart.png"
              }}
            />
          </ListItem>
        </List>
      </Content>
    );
  }
}

const mapStateToProps = state => {
  return {
    currency: state.currency
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CoinsPrice);
