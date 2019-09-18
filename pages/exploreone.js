import React from 'react';
import {ReactInstance, Surface, Module} from 'react-360-web';
import {
    AppRegistry,
    View,
    NativeModules,
} from 'react-360';
const { AudioModule, VideoModule, SurfaceManagement } = NativeModules;
import TopPosts from '../components/explore/TopPosts';
import CurrentPost from '../components/explore/CurrentPost';
import ModelView from '../components/explore/ModelView';

export default class ExploreOne extends React.Component {

    constructor(props){
        super(props);
        // Create three roots: two flat panels on the left and the right, and a Location
        // to mount rendered models in 3D space
        //const leftPanel = new Surface(300, 600, Surface.SurfaceShape.Flat);
        //leftPanel.setAngle(-0.6, 0);
        //const rightPanel = new Surface(300, 600, Surface.SurfaceShape.Flat);
        //rightPanel.setAngle(0.6, 0);
        SurfaceManagement.props = props
        SurfaceManagement.attachSurface('TopPosts',[-0.6, 0] );
        SurfaceManagement.attachSurface('CurrentPost', [0.6, 0] );
        SurfaceManagement.attachSurface('ModelView', [0, 0] );
      }

    render() {
      return (
        <View>
            
        </View>
      );
    }
  }


AppRegistry.registerComponent('TopPosts', () => TopPosts);
AppRegistry.registerComponent('CurrentPost', () => CurrentPost);
AppRegistry.registerComponent('ModelView', () => ModelView);