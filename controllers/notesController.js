export function getAllNotes (req, res) {
    res.send("You have 9 notes");
};
export function createNote (req, res) {
    res.status(201).send("Note created successfully");
}
export function updateNote (req, res) {
    const { id } = req.params;
    res.status(200).send(`Note with ID ${id} updated successfully`);
} 
export function deleteNote (req, res) {
    const { id } = req.params;
    res.status(200).send(`Note with ID ${id} deleted successfully`);
}
