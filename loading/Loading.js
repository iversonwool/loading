import React, { Component } from 'react';
import {
  View
} from 'react-native';

import RootSiblings from 'react-native-root-siblings'
import LoadingContainer from "./LoadingContainer";

export default class Loading extends Component {
  static show = () => {
    return new RootSiblings(<LoadingContainer />);
  }
  render() {
    return null
  }
}
