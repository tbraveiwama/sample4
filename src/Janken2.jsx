import { useEffect } from "react";
import { createContext } from "react";
import { useState } from "react";

import Game from "./Game";

export const select = createContext(null);

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

export default function Janken() {
    const [selected, setSelected] = useState("");
    const [game, setGame] = useState(false);
    const [result, setResult] = useState();

    function set(s) {
        setSelected(s);
    }

    function start() {
        setGame(true);
    }

    function end() {
        setGame(false);
        setSelected("");
        setResult(undefined);
    }

    function fight() {
        if (!selected) return; // 手を選んでいなければ何もしない

        const hands = ["グー", "チョキ", "パー"];
        const opHand = hands[getRandomInt(3)];

        let winner;
        if (selected === opHand) {
            winner = "あいこ";
        } else if (
            (selected === "グー" && opHand === "チョキ") ||
            (selected === "チョキ" && opHand === "パー") ||
            (selected === "パー" && opHand === "グー")
        ) {
            winner = "あなた";
        } else {
            winner = "相手";
        }

        setResult({ opponent: opHand, winner });
    }

    function again() {
        end();
        start();
    }

    return (
        <>
            <h1>じゃんけん</h1>
            <button type="button" onClick={start}>開始する</button>
            <button type="button" onClick={end}>終了</button>
            {game && (
                <select.Provider value={selected}>
                <Game
                    set={set}
                    fight={fight}
                    again={again}
                    result={result}
                />
                </select.Provider>
            )}
        </>
    );
}
