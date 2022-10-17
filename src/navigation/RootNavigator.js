import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import AuthNavigate from "./authNavigators";

export default function RootNavigator() {

    return(
        <NavigationContainer>
            <AuthNavigate />
        </NavigationContainer>
    )
}

