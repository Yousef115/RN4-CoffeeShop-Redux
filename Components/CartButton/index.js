import React, { Component } from "react";
import { Icon, Text } from "native-base";
import { connect } from "react-redux";
import { withNavigation } from "react-navigation";

class CartButton extends Component {
  render() {
    return (
      <Text style={{ color: "white" }}>
        {this.props.items.length}
        <Icon
          style={{ color: "white" }}
          onPress={() => this.props.navigation.navigate("CoffeeCart")}
          name="shoppingcart"
          type="AntDesign"
        />
      </Text>
    );
  }
}

const mapStateToProps = state => ({
  items: state.cartReducer.items
});

export default withNavigation(connect(mapStateToProps)(CartButton));
