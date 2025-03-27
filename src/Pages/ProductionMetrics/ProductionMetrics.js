import React, { useEffect } from "react";
import IndustrialMetricsIntro from "../../components/IndustrialMetricsIntro/IndustrialMetricsIntro";
import { useLanguage } from "../../LanguageContext";
import MonitoringSection from "../../components/MonitoringSection/MonitoringSection";
import Layout from "../../components/IndustrialMetricsSection/Layout";
import "./ProductionMetrics.css";

const ProductionMetrics = () => {
  const { t } = useLanguage();

  useEffect(() => {
                        document.title = "Sense View | " + t("productionMetrics");
                      }, []);

  const breadcrumbLinks = [
    { label: t("solutions"), active: false },
    { label: t("services"), to: "/services", active: true },
  ];

  const monitoringItems = [
    {
      icon: "/07-Service02/Icons/sentiment_satisfied.png",
      title: t("monitoringItems_0_title"),
      description: t("monitoringItems_0_description"),
    },
    {
      icon: "/07-Service02/Icons/table_chart_view.png",
      title: t("monitoringItems_1_title"),
      description: t("monitoringItems_1_description"),
    },
    {
      icon: "/07-Service02/Icons/timer.png",
      title: t("monitoringItems_2_title"),
      description: t("monitoringItems_2_description"),
    },
    {
      icon: "/07-Service02/Icons/hourglass_disabled.png",
      title: t("monitoringItems_3_title"),
      description: t("monitoringItems_3_description"),
    },
    {
      icon: "/07-Service02/Icons/trending_up.png",
      title: t("monitoringItems_4_title"),
      description: t("monitoringItems_4_description"),
    },
    {
      icon: "/07-Service02/Icons/bar_chart_4_bars.png",
      title: t("monitoringItems_5_title"),
      description: t("monitoringItems_5_description"),
    },
  ];

  return (
    <div>
      <div className="metrics">
        <IndustrialMetricsIntro
          breadcrumbLinks={breadcrumbLinks}
          title={t("productionMetrics")}
          description={t("introDescription")}
          buttonText={t("scheduleDemoButton")}
          buttonIcon="/00-Buttons_Dropdowns_Questions/event.svg"
          toLink={"/contact"}
          backgroundImage={"/07-Service02/Headline_Image/Operador_Ope.png"}
          backgroundPosition={"center"}
        />
        {/* KPI Section */}
        <div className="metrics-s2">
          <h2>{t("kpiTitle")}</h2>
          <h3>{t("kpiSubtitle")}</h3>
          <p>{t("kpiDescription")}</p>
        </div>

        {/* Monitoring Section */}
        <MonitoringSection title="" items={monitoringItems} />

        <p className="metrics-p-section">{t("monitoringIntro")}</p>
      </div>
      <Layout variantB="alternative" title={t("productionMetrics")} />
    </div>
  );
};

export default ProductionMetrics;
