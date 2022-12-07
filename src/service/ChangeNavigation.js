import db from "../database";

db.transaction((tx) => {
    tx.executeSql(
        "CREATE TABLE IF NOT EXISTS change_navigation (id INTEGER PRIMARY KEY AUTOINCREMENT, showHome TEXT, appStartData TEXT);", 
        [],
        (_, error) => {
            console.log(error);
        }
    )
});

const setShowHome = (obj) => {
    return new Promisse((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql(
                "INSERT INTO change_navigation (showHome, appStartData) values (?, ?);",
                [obj.showHome, obj.appStartData],
                (_, {rowAffected, insertId}) => {
                    if (rowAffected > 0) {
                        resolve(insertId);
                    }
                },
                (_, error) => {
                    reject(error);
                }
            )
        })
    })
}

export default {
    setShowHome
};