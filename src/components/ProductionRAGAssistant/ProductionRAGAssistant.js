import React from "react";
import { ExternalLink } from "lucide-react";
import styles from "../FeaturedProjectCard/FeaturedProjectCard.module.css";

function ProductionRAGAssistant() {
  return (
    <div className={styles.cardWrapper}>
      <article className={styles.projectCard}>
        <h3 className={styles.projectTitle}>Production RAG Assistant</h3>
        <p className={styles.projectSubtitle}>
          RAG evaluation and retrieval experiments
        </p>
        <p className={styles.projectDescription}>
          A production-oriented RAG project focused on retrieval quality,
          evaluation, and measurable improvement. Improved Hit Rate@4 from 85.7%
          to 100% through a controlled retrieval experiment.
        </p>
        <div className={styles.buttonGroup}>
          <a
            href="https://github.com/arzu-guney/production-rag-assistant"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.viewButton}
          >
            <ExternalLink size={16} /> View on GitHub
          </a>
        </div>
      </article>
    </div>
  );
}

export default ProductionRAGAssistant;
