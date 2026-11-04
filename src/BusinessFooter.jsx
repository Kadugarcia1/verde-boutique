import { ArrowUpRight, MapPin } from '@phosphor-icons/react';

const mapAddress = 'Verde Boutique, Rua 7 de Setembro, 136, Centro, Pirassununga, São Paulo, 13631-068, Brasil';
const mapQuery = encodeURIComponent(mapAddress);
const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${mapQuery}`;
const embedUrl = `https://maps.google.com/maps?q=${mapQuery}&z=17&hl=pt-BR&output=embed`;

export function BusinessFooter() {
  return <footer className="business-footer" aria-label="Endereço e dados da Verde Boutique">
    <div className="business-footer-inner">
      <div className="business-location">
        <div className="business-address">
          <p className="eyebrow">A casa da Verde</p>
          <h2>Venha nos visitar.</h2>
          <address>
            Rua 7 de Setembro, 136 — Centro<br />
            Pirassununga, São Paulo<br />
            CEP 13631-068
          </address>
          <a className="business-maps-link" href={mapsUrl} target="_blank" rel="noopener noreferrer">
            <MapPin size={19} aria-hidden="true" /><span>Abrir no Google Maps</span><ArrowUpRight size={16} aria-hidden="true" />
          </a>
        </div>
        <div className="business-map">
          <iframe title="Localização da Verde Boutique no Google Maps" src={embedUrl} loading="lazy" allowFullScreen referrerPolicy="no-referrer-when-downgrade" />
        </div>
      </div>
      <div className="business-legal">
        <p>Verde Boutique · CNPJ 46.966.297/0001-45</p>
        <a className="business-credit" href="https://garciaco.com.br" target="_blank" rel="noopener noreferrer">Feito por <span>Garcia Co</span><ArrowUpRight size={14} aria-hidden="true" /></a>
      </div>
    </div>
  </footer>;
}
