import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem, deleteItem, updateItem } from "./actions";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import "./styles.css";

const App: React.FC = () => {
  const items = useSelector((state: any) => state.items);
  const dispatch = useDispatch();
  const [newItem, setNewItem] = useState("");

  const handleAddItem = () => {
    dispatch(addItem(newItem));
    setNewItem("");
  };

  const handleDeleteItem = (id: number) => {
    dispatch(deleteItem(id));
  };

  const handleUpdateItem = (id: number, newItem: string) => {
    dispatch(updateItem(id, newItem));
  };

  return (
    <div className="App">
      <input
        type="text"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
        placeholder="Enter ..."
      />
      <button onClick={handleAddItem}>Add</button>

      <List>
        {items.map((item: any) => (
          <React.Fragment key={item.id}>
            <ListItem disablePadding>
              <ListItemText primary={item.text} />
              <Stack spacing={2} direction="row">
                <Button
                  variant="contained"
                  color="success"
                  onClick={() => handleUpdateItem(item.id, newItem)}
                >
                  Update
                </Button>
                <Button
                  variant="contained"
                  color="error"
                  onClick={() => handleDeleteItem(item.id)}
                >
                  Delete
                </Button>
              </Stack>
            </ListItem>
            <Divider />
          </React.Fragment>
        ))}
      </List>
    </div>
  );
};

export default App;
