/*
session.js
Node Shop
Vlatko Vučenik
Last Modified:04.06.2023 11:00
*/
const napravi_session = () => {
    let brojac = 0;
    const storage_session = new Map();
    const napravi_id = () => {
        brojac = brojac + 1;
        return `session-id-${brojac}`;
    };

    let session_trenutni;
    const session = () => session_trenutni;
    const session_start = (req) => {
       // console.log('storage', storage_session);
        let session_id = undefined;
        if (req.headers?.cookie === undefined) {
            const id = napravi_id();

            session_id = id;

        } else {
            req.headers?.cookie.split(';').forEach(x => {

                const rez = x.split('=');

                const node_session = rez[0].trim();

                if (node_session === 'node_session_id') {

                    session_id = rez[1].trim();

                } else {
                    const id = napravi_id();
                    //session.set(id,{});
                    session_id = id;
                }

            });

        }
        if (session_id === undefined) {
            const id = napravi_id();
            // session.set(id,{});
            session_id = id;
        }
        if (!storage_session.has(session_id)) storage_session.set(session_id, new Map());

        session_trenutni = storage_session.get(session_id);

        return session_id;

    };


    return {
        session, session_start

    }
}
const node_session = napravi_session();
module.exports = node_session;