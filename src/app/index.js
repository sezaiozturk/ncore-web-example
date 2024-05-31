import {
    Button,
    NCoreProvider,
    useNCoreLocalization,
    useNCoreTheme
} from "ncore-web";
import themes from './themes'
import locales from "./locales";
import useStyle from "./stylesheet";
import { FaApple } from "react-icons/fa6";

const App = () => {
    const {
        colors,
        isSetInitialHooks,
        activeTheme,
        switchTheme,
        typography,
        disabled,
        borders,
        radiuses,
        spaces,
    } = useNCoreTheme();

    const {
        activeLocale,
        switchLocale,
        localize
    } = useNCoreLocalization();

    const classes = useStyle({
        colors
    });

    return <div
        className={classes.container}
    >
        <div
            className={classes.section}
        >
            <Button
                title="Change Theme"
                onClick={() => {
                    switchTheme(activeTheme === "light" ? "dark" : "light");
                }}
            />
            <Button
                title="Change Locale"
                onClick={() => {
                    switchLocale(activeLocale === "en" ? "tr" : "en");
                }}
            />
            <Button
                title={localize("description")}
            />
            <Button
                title="Disable"
                variant="filled"
                disabled
            />
            <Button
                title="Ghost"
                variant="ghost"
            />
            <Button
                title="Size"
                size="small"
            />
            <Button
                title="Loading ???"
                variant="outlined"
            />
        </div>
    </div>
}

const ContextApi = () => {
    return (
        <NCoreProvider
            config={{
                themes,
                locales
            }}
        >
            <App />
        </NCoreProvider>
    );
};



export default ContextApi;
