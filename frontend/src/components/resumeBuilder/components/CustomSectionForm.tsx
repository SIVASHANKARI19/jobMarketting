import React from 'react';
import { CustomSection } from '../types/resume';
import { Plus, Trash2, GripVertical } from 'lucide-react';

interface CustomSectionFormProps {
  section: CustomSection;
  onChange: (section: CustomSection) => void;
  onDelete: () => void;
}

export const CustomSectionForm: React.FC<CustomSectionFormProps> = ({
  section,
  onChange,
  onDelete
}) => {
  const updateTitle = (title: string) => {
    onChange({ ...section, title });
  };

  const addItem = () => {
    const newItem = {
      id: Date.now().toString(),
      content: '',
    };
    onChange({ ...section, items: [...section.items, newItem] });
  };

  const updateItem = (id: string, content: string) => {
    onChange({
      ...section,
      items: section.items.map((item) =>
        item.id === id ? { ...item, content } : item
      ),
    });
  };

  const removeItem = (id: string) => {
    onChange({
      ...section,
      items: section.items.filter((item) => item.id !== id),
    });
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <input
          type="text"
          value={section.title}
          onChange={(e) => updateTitle(e.target.value)}
          placeholder="Section Title (e.g., Languages, Awards, Volunteer Work)"
          className="flex-1 text-lg font-semibold text-blue-900 bg-transparent border-b-2 border-blue-200 focus:border-blue-600 outline-none px-2 py-1"
        />
        <div className="flex items-center gap-2">
          <button
            onClick={addItem}
            className="flex items-center gap-1 px-3 py-1.5 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-sm"
          >
            <Plus className="w-4 h-4" />
            Add Item
          </button>
          <button
            onClick={onDelete}
            className="text-red-600 hover:text-red-700 p-2"
          >
            <Trash2 className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="space-y-3">
        {section.items.map((item, index) => (
          <div key={item.id} className="flex gap-2 items-start">
            <div className="pt-3">
              <GripVertical className="w-4 h-4 text-gray-400" />
            </div>
            <textarea
              value={item.content}
              onChange={(e) => updateItem(item.id, e.target.value)}
              placeholder="Enter details (e.g., Spanish - Fluent, English - Native)"
              rows={2}
              className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
            />
            <button
              onClick={() => removeItem(item.id)}
              className="text-red-600 hover:text-red-700 p-2 mt-1"
            >
              <Trash2 className="w-4 h-4" />
            </button>
          </div>
        ))}
      </div>

      {section.items.length === 0 && (
        <div className="text-center py-6 text-gray-500 text-sm bg-gray-50 rounded-lg border-2 border-dashed border-gray-200">
          No items added yet. Click "Add Item" to create one.
        </div>
      )}
    </div>
  );
};
