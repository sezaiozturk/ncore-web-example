import {
    createUseStyles
} from 'react-jss'
const useStyle = createUseStyles({
    container: {
        backgroundColor: ({ colors }) => colors.secondary,
        height: "100%"
    },
    section: {
        alignItems: "center",
        flexWrap: "wrap",
        display: 'flex',
        padding: 20,
        gap: 10,
    }
});

export default useStyle;