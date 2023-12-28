export default function InputComponents({
  type,
  text,
  placeholderText,
  setValue,
  value,
}) {
  return (
    <div>
      <label
        for={text}
        className="block mb-2 text-sm font-medium text-gray-900"
      >
        {text}
      </label>
      <input
        type={type}
        id={text}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="outline-0 block p-3 max-w-[350px] min-w-[350px] text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500"
        placeholder={placeholderText}
        required
      />
    </div>
  );
}
