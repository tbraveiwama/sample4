import { useState } from "react"

export default function Janken() {
    const [selected, setSelected] = useState("");
    const [game, setGame] = useState(false);
    const [result, setResult] = useState();


    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

    function setG() {
        setSelected("グー");
    }

    function setC() {
        setSelected("チョキ");
    }

    function setP() {
        setSelected("パー");
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
        const array = ["グー", "チョキ", "パー"];
        const opHand = array[getRandomInt(3)];

        if (selected === opHand) {
            setResult(
                <>
                    <div>相手の手:{opHand}</div>
                    <div>
                        あいこです
                    </div>
                    <div>
                        <button type="button" onClick={again}>もう一度</button>
                    </div>
                </>
            )
        } else {
            let winner;
            if (selected === "グー") {
                switch (opHand) {
                    case "チョキ":
                        winner = "あなた";
                        break;
                    case "パー":
                        winner = "相手";
                        break;
                }
            }
            if (selected === "チョキ") {
                switch (opHand) {
                    case "パー":
                        winner = "あなた";
                        break;
                    case "グー":
                        winner = "相手";
                        break;
                }
            }
            if (selected === "パー") {
                switch (opHand) {
                    case "グー":
                        winner = "あなた";
                        break;
                    case "チョキ":
                        winner = "相手";
                        break;
                }
            }
            setResult(
                <>
                    <div>相手の手:{opHand}</div>
                    <div>
                        勝者は{winner}です
                    </div>
                    <button type="button" onClick={again}>もう一度</button>
                </>
            )
        }
    }

    function again() {
        end();
        start();
    }

    return (
        <>
            <h1>じゃんけん</h1>
            <button type="button" onClick={start}>開始</button>
            <button type="button" onClick={end}>終了</button>
            {game && (<Game selected={selected} setG={setG} setC={setC} setP={setP} fight={fight} again={again} result={result} />)}
        </>
    )


    function Game({ selected, setG, setC, setP, fight, again, result }) {

        function dsplay() {
            if (!result) {
                return (
                    <>
                        <button type="button" onClick={setG}>グー</button>
                        <button type="button" onClick={setC}>チョキ</button>
                        <button type="button" onClick={setP}>パー</button>
                        <div>
                            <button type="button" onClick={fight}>決定</button>
                        </div>
                    </>
                )
            }
        }

        return (
            <div>
                <div>自分の手:{selected}</div>
                <div>{dsplay()}</div>
                <div>{result}</div>
            </div>
        )
    }

}

