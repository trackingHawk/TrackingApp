import React from "react";
import HomePage from "./HomePage";
export const ProfileScreen=({navigation})=><HomePage navigation={navigation} name='Profile'/>
export const MessageScreen=({navigation})=><HomePage navigation={navigation} name='Message'/>
export const ActionScreen=({navigation})=><HomePage navigation={navigation} name='Action'/>
export const TrackersScreen=({navigation})=><HomePage navigation={navigation} name='Trackers'/>