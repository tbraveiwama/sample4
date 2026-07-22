import { useContext } from "react";
import { select } from "./Janken2";

export default function Game({ set, fight, again, result }) {
    const selected = useContext(select);
    if (!result) {
        return (
            <div>
                <div>自分の手:{selected}</div>
                <button type="button" onClick={() => set("グー")}>グー</button>
                <button type="button" onClick={() => set("チョキ")}>チョキ</button>
                <button type="button" onClick={() => set("パー")}>パー</button>
                <div>
                    <button type="button" onClick={fight}>決定</button>
                </div>
            </div>
        );
    }

    return (
        <div>
            <div>自分の手:{selected}</div>
            <div>相手の手:{result.opponent}</div>
            <div>
                {result.winner === "あいこ"
                    ? "あいこです"
                    : `勝者は${result.winner}です`}
            </div>
            <button type="button" onClick={again}>もう一度</button>
        </div>
    );
}