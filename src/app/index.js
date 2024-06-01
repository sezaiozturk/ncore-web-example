import {
    useNCoreLocalization,
    NCoreProvider,
    useNCoreTheme,
    Button,
    Text,
    TextInput,
    Chip,
    Loading,
    Row,
    Switcher,
    StateCard,
    Dialog,
    Container,
} from "ncore-web";
import themes from './themes'
import locales from "./locales";
import designTokens from "./design";
import useStyle from "./stylesheet";
import { FaApple, FaDAndD } from "react-icons/fa6";
import { useState } from "react";

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
    const [x, setX] = useState(false);

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
                title="Icon"
                variant="outlined"
                icon={() => <FaApple size={12} />}
            />
            <Button
                title="Loading"
                loading
            />
        </div>
        <div
            className={classes.section}
        >
            <Text
                color="text"
                variant={"body"}
            >
                Sezai
            </Text>
            <Text
                color="text"
                variant={"header1"}
            >
                Sezai
            </Text>
            <Text
                color="primary"
                variant={"myFont"}
            >
                Sezai
            </Text>
            <TextInput
                clearEnabled
                isRequired
                title="name"
                placeholder="placeholder"
                spreadBehaviour="stretch"
                style={{
                    //width: "100%",
                }}
                contentType="email"
            />
            <Chip
                title="categories"
                color="text"
                isCancelable
                onClick={() => alert("clik")}
                size="large"
                icon={() => <FaApple color={colors.secondary} />}
                titleColor="secondary"
            />
            <Loading
                color="primary"
            />
            <Row
                isRedirect
                style={{
                    width: "30%"
                }}
                title="delete"
            />
        </div>
        <div
            className={classes.section}
        >
            <Switcher
                disabled
            />
            <Switcher
                isActive={x}
                onChange={() => setX(!x)}
            />
        </div>
        <StateCard
            title="error"
            content="this is a error message"
            icon={
                () => <FaApple
                    size={30}
                />
            }
            titleColor="primary"
            contentColor="text"
            isAction
            buttonProps={{
                onClick: () => setX(!x),
                title: "Show Dialog",
                spreadBehaviour: "free"
            }}
        />
        <Dialog
            isVisible={x}
            title="Alert"
            content="Hello world"
            variant="yes-no"
            primaryButtonProps={{
                onClick: () => setX(!x)
            }}
            contentContainerStyle={{
                padding: 100
            }}
            headerContainerStyle={{
                backgroundColor: "red"
            }}
        />
    </div >
}

const NCoreContext = () => {
    return (
        <NCoreProvider
            config={{
                themes,
                locales,
                designTokens
            }}
        >
            <App />
        </NCoreProvider>
    );
};

export default NCoreContext;

/**
 * <div style={{
                backgroundColor: colors.primary,
                borderRadius: radiuses.quarter,
                justifyContent: "center",
                flexDirection: "column",
                alignItems: "center",
                display: "flex",
                height: 100,
                width: 100,
            }}>
                <span>{radiuses.hard}</span>
                <span>{spaces.container}</span>
                <span>{borders.myBorder}</span>
            </div>
 */
