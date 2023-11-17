import React, { useEffect, useState } from "react";

interface ItemType {
  id: string;
  user: string;
}

const TestingDeleteLater: React.FC = () => {
  const [items, setItems] = useState<ItemType[]>([]);
  const [newUser, setNewUser] = useState<string>("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("https://r2bxv0tyaj.execute-api.us-east-1.amazonaws.com/production/items");

      if (!response.ok) {
        console.log("response was not ok");
        throw new Error(`Network response was not ok: ${response.statusText}`);
      }

      const data = await response.json();
      setItems(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleAdd = async () => {
    let randomNumber = Math.floor(Math.random() * 101).toString();

    try {
      const response = await fetch(`https://r2bxv0tyaj.execute-api.us-east-1.amazonaws.com/production/items`, {
        method: "Put",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: randomNumber, user: newUser }),
      });

      console.log("Update response:", response);

      if (response.ok) {
        setItems((prevItems) => [...prevItems, { id: randomNumber, user: newUser }]);
        console.log("Item added successfully!");
      } else {
        console.error("Failed to update item. Server response:", response.status, response.statusText);
        console.error(await response.text());
      }
    } catch (error) {
      console.error("Error updating item:", error);
    }
  };

  const handleUpdate = async (id: string, updatedUser: string | null) => {
    try {
      console.log("Updating item:", id, updatedUser);

      if (updatedUser !== null) {
        console.log("Updating item with data:", { id: id, user: updatedUser });

        const response = await fetch(`https://r2bxv0tyaj.execute-api.us-east-1.amazonaws.com/production/items/${id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ id: id, user: updatedUser }),
        });

        console.log("Update response:", response);

        if (response.ok) {
          setItems((prevItems) => prevItems.map((item) => (item.id === id ? { ...item, user: updatedUser } : item)));
          console.log("Item updated successfully!");
        } else {
          console.error("Failed to update item. Server response:", response.status, response.statusText);
          console.error(await response.text());
        }
      }
    } catch (error) {
      console.error("Error updating item:", error);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      console.log(id);
      console.log(items);
      const response = await fetch(`https://r2bxv0tyaj.execute-api.us-east-1.amazonaws.com/production/items/${id}`, {
        method: "DELETE",
      });
      console.log("response: ", response);
      if (response.ok) {
        setItems((prevItems) => prevItems.filter((item) => item.id !== id));
        console.log("Item deleted successfully!");
      } else {
        console.error("Failed to delete item. Server response:", response.status, response.statusText);
        console.error(await response.text());
      }
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  };

  return (
    <div>
      <h1>Items</h1>
      <ul style={{ outline: "1px solid red" }}>
        {items.map((item) => (
          <li key={item.id}>
            ID: {item.id}, User: {item.user}
            <button onClick={() => handleUpdate(item.id, prompt("Enter new user:"))}>Update</button>
            <button onClick={() => handleDelete(item.id)}>Delete</button>
          </li>
        ))}
      </ul>

      <div>
        <input type='text' placeholder='Enter new user' value={newUser} onChange={(e) => setNewUser(e.target.value)} />
        <button onClick={handleAdd}>Add User</button>
      </div>
    </div>
  );
};

export default TestingDeleteLater;
