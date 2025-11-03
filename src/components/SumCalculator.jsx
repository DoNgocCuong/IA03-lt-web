import React, { useState } from "react";

// Component SumCalculator dùng để nhập 2 số và tính tổng
export default function SumCalculator() {
    // State lưu giá trị nhập từ input
    const [number1, setNumber1] = useState(""); // số 1
    const [number2, setNumber2] = useState(""); // số 2

    // State lưu kết quả tính tổng
    const [sum, setSum] = useState(null);

    // State lưu thông báo lỗi nếu input không hợp lệ
    const [error, setError] = useState("");

    // Hàm xử lý khi người dùng nhấn nút "Calculate Sum"
    const handleCalculate = () => {
        // Chuyển giá trị input từ string sang số thực
        const num1 = parseFloat(number1);
        const num2 = parseFloat(number2);

        // Kiểm tra từng số có hợp lệ hay không
        if (isNaN(num1) && isNaN(num2)) {
            // Cả 2 số đều không hợp lệ
            setError("Vui lòng nhập đúng cả 2 số!");
            setSum(null); // Xóa kết quả cũ
        } else if (isNaN(num1)) {
            // Chỉ số 1 không hợp lệ
            setError("Số 1 không hợp lệ!");
            setSum(null);
        } else if (isNaN(num2)) {
            // Chỉ số 2 không hợp lệ
            setError("Số 2 không hợp lệ!");
            setSum(null);
        } else {
            // Cả 2 số hợp lệ → tính tổng
            setSum(num1 + num2);
            setError(""); // Xóa thông báo lỗi
        }
    };

    return (
        <div className="sum-calculator">
            <h2>Sum Calculator</h2>

            {/* Input số 1 */}
            <div>
                <label>
                    Number 1:
                    <input
                        type="text"
                        value={number1} // controlled component
                        onChange={(e) => setNumber1(e.target.value)} // cập nhật state khi người dùng nhập
                    />
                </label>
            </div>

            {/* Input số 2 */}
            <div>
                <label>
                    Number 2:
                    <input
                        type="text"
                        value={number2} // controlled component
                        onChange={(e) => setNumber2(e.target.value)} // cập nhật state
                    />
                </label>
            </div>

            {/* Nút tính tổng */}
            <button onClick={handleCalculate}>Calculate Sum</button>

            {/* Hiển thị lỗi nếu có */}
            {error && <p className="error">{error}</p>}

            {/* Hiển thị kết quả nếu đã tính */}
            {sum !== null && <p className="result">Result: {sum}</p>}
        </div>
    );
}
