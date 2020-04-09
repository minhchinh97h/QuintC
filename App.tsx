import React from 'react';
import RootNavigation from './routes';
import i18next from "i18next"

i18next.init({
    lng: "en",
    ns: ["./translations/en"],
    defaultNS: "./translations/en"
}, (err, t) => {
    if (err) return console.log("something went wrong loading", err)
})

const App = () => <RootNavigation />

export default App;
