import { Link } from "react-router-dom";
import styles from "./ApplicationSuccessCard.module.css";
import { Check, Copy, Printer } from "lucide-react";
import Button from "@/components/ui/Button/Button";
import { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import useClipboard from "@/hooks/useClipboard";

export default function ApplicationSuccessCard() {
  const contentRef = useRef<HTMLDivElement>(null);
  const handlePrint = useReactToPrint({
    content: () => contentRef.current,
  });
  const { copied, copyToClipboard } = useClipboard();

  return (
    <div className={styles.applicationSuccessCard}>
      <div className={styles.cardHeader}>
        <h2>Başvurunuz başarıyla alındı!</h2>
        <p>
          Destek ekibimizle iletişime geçtiğiniz için teşekkür ederiz. Biletinizi başarıyla aldık ve
          ekibimiz en kısa sürede size geri dönecektir.
        </p>
      </div>
      <div ref={contentRef} className={styles.cardContent}>
        <span className={styles.subtitle}>Başvuru detayları · 14:39</span>
        <h4>Başvuru Sahibi Bilgileri:</h4>
        <p>
          <span>Ad:</span> John
        </p>
        <p>
          <span>Soyad:</span> Doe
        </p>
        <p>
          <span>Yaş:</span> 24
        </p>
        <p>
          <span>TC Kimlik Numarası:</span> 11111111111
        </p>
        <p>
          <span>Başvuru nedeni:</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed,
          nam nesciunt odio id cupiditate dolore, temporibus voluptatem iure illum eligendi quos
          accusamus optio quisquam hic. Veritatis fugit eveniet nulla sapiente?
        </p>
        <p>
          <span>Adres:</span> 123. sok aaa cad.
        </p>
        <div className={styles.badgeWrapper}>
          <span className={styles.subtitle}>Başvuru kodu:</span>
          <button className={styles.badge} onClick={() => copyToClipboard("test")}>
            <span>123456-12345</span>
            {!copied ? (
              <Copy className={styles.badgeIcon} />
            ) : (
              <Check className={styles.badgeIcon} />
            )}
          </button>
        </div>
      </div>
      <div className={styles.cardFooter}>
        <div>
          <Button onClick={handlePrint} size="icon" variant="outline">
            <Printer />
          </Button>
        </div>
        <div>
          <Link to={"/basvuru-sorgula"}>Başvuru durumunu sorgula</Link>
        </div>
      </div>
    </div>
  );
}
