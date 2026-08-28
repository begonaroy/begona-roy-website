import React from 'react';
import { CLINICAL_INFO } from '../data/content';
import { X, ShieldCheck, FileText, Lock } from 'lucide-react';

interface PrivacyModalProps {
  isOpen: boolean;
  type: 'privacidad' | 'aviso' | 'cookies';
  onClose: () => void;
  isDark: boolean;
}

export const PrivacyModal: React.FC<PrivacyModalProps> = ({
  isOpen,
  type,
  onClose,
  isDark,
}) => {
  if (!isOpen) return null;

  const titles = {
    privacidad: 'Política de Privacidad y Protección de Datos Sanitarios',
    aviso: 'Aviso Legal e Información Sanitaria Colegiada',
    cookies: 'Política de Cookies'
  };

  return (
    <div
      id="privacy-modal-overlay"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/60 backdrop-blur-sm animate-fadeIn"
      onClick={onClose}
    >
      <div
        id="privacy-modal-content"
        className={`relative w-full max-w-3xl rounded-3xl p-6 sm:p-10 shadow-2xl transition-all max-h-[85vh] overflow-y-auto ${
          isDark
            ? 'bg-[#151B17] border border-[#2D3930] text-[#F3EFE7]'
            : 'bg-[#FBF9F5] border border-[#E8E2D9] text-[#222823]'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Cerrar modal legal"
          className={`absolute top-5 right-5 p-2 rounded-full transition-colors ${
            isDark
              ? 'bg-[#222C26] text-[#B7BEA3] hover:text-[#F3EFE7]'
              : 'bg-[#E8ECE9] text-[#5A655C] hover:text-[#222823]'
          }`}
        >
          <X className="w-5 h-5" />
        </button>

        {/* Title */}
        <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[#E8E2D9] dark:border-[#2D3930]">
          <ShieldCheck className="w-6 h-6 text-[#AA4664] dark:text-[#D8659B] flex-shrink-0" />
          <h2 className="font-serif text-xl sm:text-2xl font-medium">
            {titles[type]}
          </h2>
        </div>

        {/* Body Content */}
        <div className="space-y-4 text-xs sm:text-sm leading-relaxed text-[#5A655C] dark:text-[#B7BEA3]">
          {type === 'privacidad' && (
            <>
              <p>
                <strong>1. Responsable del Tratamiento:</strong> Begoña Roy, Psicóloga Sanitaria Colegiada nº CV-07890 por el Colegio Oficial de Psicología de la Comunitat Valenciana. Contacto: info@begonaroy.com.
              </p>
              <p>
                <strong>2. Finalidad del Tratamiento:</strong> Los datos de carácter personal y de salud facilitados a través de formularios, correos electrónicos o durante el proceso psicoterapéutico serán tratados con la exclusiva finalidad de prestar los servicios de asesoramiento psicológico, psicoterapia sanitaria, psicooncología o liberación del pericardio, así como para la gestión administrativa de citas.
              </p>
              <p>
                <strong>3. Confidencialidad y Secreto Profesional:</strong> Toda la información compartida está amparada por el secreto profesional recogido en el Código Deontológico del Psicólogo y por el Reglamento General de Protección de Datos (RGPD UE 2016/679) y la Ley Orgánica 3/2018 (LOPDGDD).
              </p>
              <p>
                <strong>4. Derechos:</strong> En cualquier momento puedes ejercer tus derechos de acceso, rectificación, supresión, limitación y portabilidad enviando un correo a info@begonaroy.com acompañado de fotocopia de tu DNI.
              </p>
            </>
          )}

          {type === 'aviso' && (
            <>
              <p>
                <strong>Titularidad de la Web:</strong> En cumplimiento del artículo 10 de la Ley 34/2002 de Servicios de la Sociedad de la Información y Comercio Electrónico (LSSI), se informa de que este sitio web es propiedad de Begoña Roy.
              </p>
              <p>
                <strong>Cualificación Profesional:</strong> Licenciada en Psicología por la Universidad de Valencia (1995). Habilitación como Psicóloga General Sanitaria y Colegiada nº CV-07890.
              </p>
              <p>
                <strong>Naturaleza de la Información:</strong> Los contenidos expuestos en esta web tienen carácter puramente divulgativo y de presentación de servicios. En ningún caso sustituyen el diagnóstico, prescripción médica o tratamiento personalizado por un facultativo especialista.
              </p>
            </>
          )}

          {type === 'cookies' && (
            <>
              <p>
                Este sitio web utiliza únicamente cookies técnicas indispensables para el correcto funcionamiento de la navegación, preferencias de tema (modo oscuro/claro) y seguridad en el envío de formularios.
              </p>
              <p>
                No se utilizan cookies analíticas de terceros invasivas ni cookies de rastreo publicitario comercial.
              </p>
            </>
          )}
        </div>

        <div className="mt-8 pt-4 border-t border-[#E8E2D9] dark:border-[#2D3930] flex justify-end">
          <button
            onClick={onClose}
            className={`px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all ${
              isDark
                ? 'bg-[#7C9682] text-[#171A17]'
                : 'bg-[#4A5D4E] text-white'
            }`}
          >
            Entendido y Aceptar
          </button>
        </div>
      </div>
    </div>
  );
};
