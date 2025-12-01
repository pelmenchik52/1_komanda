import React from "react";

const Body = () => {
    return (
        <main style={styles.body}>
            <div style={styles.card}>
                <img src={"/avatar-default.png"} alt="John Doe" style={styles.photo} />
                <div style={styles.textContainer}>
                    <h2 style={styles.name}>Kishko Mykhailo</h2>
                    <p style={styles.position}>Business analyst, Dev-Ops engineer</p>
                </div>
            </div>

            <div style={styles.card}>
                <img src={"/andreiev.jpg"} alt="Vladyslav Andreiev" style={styles.photo} />
                <div style={styles.textContainer}>
                    <h2 style={styles.name}>Andreiev Vladyslav Romanovich</h2>
                    <p style={styles.position}>Project manager</p>
                </div>
            </div>

            <div style={styles.card}>
                <img src={"/yulia.jpg"} alt="Yulia Kravtsiv" style={styles.photo} />
                <div style={styles.textContainer}>
                    <h2 style={styles.name}>Kravtsiv Yulia Andriiva</h2>
                    <p style={styles.position}>QA</p>
                </div>
            </div>

            <div style={styles.card}>
                <img src={"/prokopiv.jpg"} alt="Vladyslav Prokopiv" style={styles.photo} />
                <div style={styles.textContainer}>
                    <h2 style={styles.name}>Prokopiv Vladyslav Ivanovych</h2>
                    <p style={styles.position}>Developer</p>
                </div>
            </div>
        </main>
    );
};

const styles = {
    body: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        padding: "20px",
    },
    card: {
        width: "200px",
        padding: "1em",
        borderRadius: "10px",
        backgroundColor: "#fff",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        textAlign: "center",
        margin: "1em",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    photo: {
        width: "100px",
        height: "100px",
        borderRadius: "50%",
        objectFit: "cover",
    },
    textContainer: {
        marginTop: "0.5em",
    },
    name: {
        fontSize: "1em",
        fontWeight: "bold",
        color: "#333",
        margin: "0",
    },
    position: {
        fontSize: "0.9em",
        color: "#6a0dad",
        margin: "0.5em 0 0 0",
    },
};

export default Body;
