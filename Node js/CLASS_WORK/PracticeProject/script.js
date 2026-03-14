const API = "http://localhost:3000/data";

async function addData() {

    const inputBox = document.getElementById("dataInput");
    const input = inputBox.value.trim();

    if (!input) {
        alert("Please enter some data");
        return;
    }

    try {

        await fetch(API, {
            method: "POST",
            body: input
        });

        inputBox.value = "";

        loadData();

    } catch (error) {
        console.log("Error adding data:", error);
    }
}

async function loadData() {

    try {

        const res = await fetch(API);
        const data = await res.json();

        const list = document.getElementById("dataList");
        list.innerHTML = "";

        data.forEach(item => {

            const li = document.createElement("li");

            const text = document.createElement("span");
            text.innerText = `${item.id} : ${item.data}`;

            const delBtn = document.createElement("button");
            delBtn.innerText = "Delete";
            delBtn.className = "deleteBtn";

            delBtn.onclick = () => deleteData(item.id);

            li.appendChild(text);
            li.appendChild(delBtn);

            list.appendChild(li);

        });

    } catch (error) {
        console.log("Error loading data:", error);
    }
}

async function deleteData(id) {

    try {

        await fetch(`${API}?id=${id}`, {
            method: "DELETE"
        });

        loadData();

    } catch (error) {
        console.log("Error deleting data:", error);
    }
}

// Allow Enter key to add data
document.getElementById("dataInput").addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
        addData();
    }
});

loadData();