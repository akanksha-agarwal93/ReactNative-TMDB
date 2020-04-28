import MapView, {Marker} from 'react-native-maps';
import React, {Component} from 'react';
import {StyleSheet, Icon} from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import FAB from 'react-native-fab';

class MapsScreen extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    region: {
      latitude: 29.15093038659959,
      longitude: 72.87565246224403,
      latitudeDelta: 0.19881810429062696,
      longitudeDelta: 0.1098612695932388,
    },
    markers: [],
  };

  componentDidMount() {
    console.log('ComponentDidMount called');
    Geolocation.getCurrentPosition(position => {
      console.log(position);
      let mapRegion = {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
        latitudeDelta: 0.19881810429062696,
        longitudeDelta: 0.1098612695932388,
      };
      this.onRegionChange(mapRegion);
      //   this.setState(region.latitude: (double)position.coords.latitude,
      //     region.longitude: (double)position.coords.longitude)
    });
  }

  getInitialState() {
    return {
      region: {
        latitude: 19.15093038659959,
        longitude: 72.87565246224403,
        latitudeDelta: 0.19881810429062696,
        longitudeDelta: 0.1098612695932388,
      },
    };
  }

  onRegionChange(region) {
    console.log('onRegionChange Called');
    console.log(this.state.region);
    this.setState({region: region});
  }

  render() {
    return (
      <>
        <MapView
          style={styles.map}
          initialRegion={this.state.region}
          onRegionChange={region => this.onRegionChange(region)}
          zoomEnabled={true}>
          {/* {this.state.markers.map(marker => ( */}
          <Marker
            coordinate={{
              latitude: this.state.region.latitude,
              longitude: this.state.region.longitude,
            }}
            title={'Current Location'}
            description={'This is your current location'}
            draggable={false}
          />
          {/* ))} */}
        </MapView>
        <FAB
          buttonColor="red"
          iconTextColor="#FFFFFF"
          onClickAction={() => {
            console.log('FAB pressed');
          }}
          visible={true}
          iconTextComponent={<Icon name="all-out" />}
        />
      </>
    );
  }
}

const myPlace = {
  type: 'FeatureCollection',
  features: [
    {
      type: 'Feature',
      properties: {},
      geometry: {
        type: 'Point',
        coordinates: [64.165329, 48.844287],
      },
    },
  ],
};
const styles = StyleSheet.create({
  map: {
    flex: 1,
    ...StyleSheet.absoluteFillObject,
  },
});

export default MapsScreen;
