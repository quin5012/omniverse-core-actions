export default function handler(req, res) {
  if (req.method === 'POST') {
    const { entityType, requiredFields } = req.body;

    const schema = {
      entity: entityType || "Generic",
      schemaCreated: true,
      structure: requiredFields?.length > 0
        ? Object.fromEntries(requiredFields.map(field => [field, "string"]))
        : { id: "string", createdAt: "date" },
      timestamp: Date.now()
    };

    return res.status(200).json(schema);
  }

  res.status(405).json({ error: 'Only POST supported' });
}
