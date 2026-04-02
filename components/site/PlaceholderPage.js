export default function PlaceholderPage({ title, children }) {
  return (
    <div className="container py-24 md:py-32">
      <h1 className="heading2">{title}</h1>
      <p className="body2 text-secondary mt-4 max-w-2xl">
        Bu sayfa henüz taşınmadı; menü ve URL yapısı hazır. İçerik sonra
        eklenebilir.
      </p>
      {children}
    </div>
  );
}
