import React, { PureComponent } from "react";
import { Translation } from "react-i18next";
import Footer from "../../components/pages/site/Footer";

export default class Condition extends PureComponent {
  render() {
    return (
      <section
        className="conditions-wrapper pt-page pt-page-1"
        data-id="condition"
      >
        <Translation>
          {(t) => (
            <>
              <div className="section-title-block">
                <h3 className="section-title">{t("CONDITION.TITLE")}</h3>
              </div>
              <div className="section-title-content">
                <div className="block-title">
                  <h3>{t("CONDITION.DEFINITIONS.TITLE")}</h3>
                  <p>
                    <b>{t("CONDITION.DEFINITIONS.CLIENT.TITLE")}</b>{" "}
                    {t("CONDITION.DEFINITIONS.CLIENT.DESCRIPTION")}
                    <br />
                    <b>{t("CONDITION.DEFINITIONS.SERVICES.TITLE")}</b>{" "}
                    <a href="https://randrin-nzeukang.netlify.app">
                      https://randrin-nzeukang.netlify.app
                    </a>{" "}
                    {t("CONDITION.DEFINITIONS.SERVICES.DESCRIPTION")}
                  </p>
                  <p>
                    <b>{t("CONDITION.DEFINITIONS.CONTENT.TITLE")}</b>{" "}
                    {t("CONDITION.DEFINITIONS.CONTENT.DESCRIPTION")}
                  </p>
                  <p>
                    <b>{t("CONDITION.DEFINITIONS.INFOS_CUSTOMERS.TITLE")}</b>{" "}
                    {t("CONDITION.DEFINITIONS.INFOS_CUSTOMERS.DESCRIPTION_1")}{" "}
                    <a href="https://randrin-nzeukang.netlify.app">
                      https://randrin-nzeukang.netlify.app
                    </a>{" "}
                    {t("CONDITION.DEFINITIONS.INFOS_CUSTOMERS.DESCRIPTION_2")}
                  </p>
                  <p>
                    <b>{t("CONDITION.DEFINITIONS.USER.TITLE")}</b>{" "}
                    {t("CONDITION.DEFINITIONS.USER.DESCRIPTION")}
                  </p>
                  <p>
                    <b>{t("CONDITION.DEFINITIONS.INFOS_PERSONNALS.TITLE")}</b>{" "}
                    {t("CONDITION.DEFINITIONS.INFOS_PERSONNALS.DESCRIPTION")}
                  </p>
                  <p>{t("CONDITION.DEFINITIONS.DESCRIPTION")}</p>
                  <h3>{t("CONDITION.PRESTATIONS.TITLE")}</h3>
                  <p>
                    {t("CONDITION.PRESTATIONS.DESCRIPTION_1")}{" "}
                    <a href="https://randrin-nzeukang.netlify.app">
                      https://randrin-nzeukang.netlify.app
                    </a>{" "}
                    {t("CONDITION.PRESTATIONS.DESCRIPTION_2")}
                  </p>
                  <p>
                    <strong>{t("CONDITION.PRESTATIONS.OWNER.TITLE")}</strong>{" "}
                    {t("CONDITION.PRESTATIONS.OWNER.DESCRIPTION")}
                    <br />
                    <strong>
                      {t("CONDITION.PRESTATIONS.RESPONSIBLE.TITLE")}
                    </strong>{" "}
                    {t("CONDITION.PRESTATIONS.RESPONSIBLE.DESCRIPTION_1")}
                    <br />
                    {t("CONDITION.PRESTATIONS.RESPONSIBLE.DESCRIPTION_2")}
                    <br />
                    <strong>
                      {t("CONDITION.PRESTATIONS.WEBMASTER.TITLE")}
                    </strong>
                    {t("CONDITION.PRESTATIONS.WEBMASTER.DESCRIPTION")}
                    <br />
                    <strong>
                      {t("CONDITION.PRESTATIONS.HOST.TITLE")}
                    </strong>{" "}
                    {t("CONDITION.PRESTATIONS.HOST.DESCRIPTION")}
                    <br />
                    <strong>
                      {t("CONDITION.PRESTATIONS.DATA_PROTECTION.TITLE")}
                    </strong>{" "}
                    {t("CONDITION.PRESTATIONS.DATA_PROTECTION.DESCRIPTION")}
                    <br />
                  </p>
                  <div ng-bind-html="linkHTML">
                    <p>
                      {t("CONDITION.PRESTATIONS.COPYRIGHT.TITLE")}{" "}
                      <a
                        href="https://fr.orson.io/1371/generateur-mentions-legales"
                        title="générateur gratuit offert par Orson.io"
                      >
                        {t("CONDITION.PRESTATIONS.COPYRIGHT.DESCRIPTION")}
                      </a>
                    </p>
                  </div>
                  <h3>{t("CONDITION.GENERALS_CONDITIONS.TITLE")}</h3>
                  <p>{t("CONDITION.GENERALS_CONDITIONS.DESCRIPTION_1")}</p>
                  <p>
                    {t("CONDITION.GENERALS_CONDITIONS.DESCRIPTION_2")}
                    <a href="https://randrin-nzeukang.netlify.app">
                      https://randrin-nzeukang.netlify.app
                    </a>
                    {t("CONDITION.GENERALS_CONDITIONS.DESCRIPTION_3")}
                    <a href="https://randrin-nzeukang.netlify.app">
                      https://randrin-nzeukang.netlify.app
                    </a>
                    {t("CONDITION.GENERALS_CONDITIONS.DESCRIPTION_4")}
                  </p>
                  <p>
                    {t("CONDITION.GENERALS_CONDITIONS.DESCRIPTION_5")}
                    <a href="https://randrin-nzeukang.netlify.app">
                      https://randrin-nzeukang.netlify.app
                    </a>
                    {t("CONDITION.GENERALS_CONDITIONS.DESCRIPTION_6")}
                    <a href="https://randrin-nzeukang.netlify.app">
                      https://randrin-nzeukang.netlify.app
                    </a>
                    {t("CONDITION.GENERALS_CONDITIONS.DESCRIPTION_7")}
                    <a href="https://randrin-nzeukang.netlify.app">
                      https://randrin-nzeukang.netlify.app
                    </a>
                    {t("CONDITION.GENERALS_CONDITIONS.DESCRIPTION_8")}
                  </p>
                  <h3>{t("CONDITION.SERVICES.TITLE")}</h3>
                  <p>
                    {t("CONDITION.SERVICES.DESCRIPTION_1")}{" "}
                    <a href="https://randrin-nzeukang.netlify.app">
                      https://randrin-nzeukang.netlify.app
                    </a>{" "}
                    {t("CONDITION.SERVICES.DESCRIPTION_2")}
                    <a href="https://randrin-nzeukang.netlify.app">
                      https://randrin-nzeukang.netlify.app
                    </a>{" "}
                    {t("CONDITION.SERVICES.DESCRIPTION_3")}{" "}
                    <a href="https://randrin-nzeukang.netlify.app">
                      https://randrin-nzeukang.netlify.app
                    </a>{" "}
                    {t("CONDITION.SERVICES.DESCRIPTION_4")}
                  </p>
                  <p>
                    {t("CONDITION.SERVICES.DESCRIPTION_5")}{" "}
                    <a href="https://randrin-nzeukang.netlify.app">
                      https://randrin-nzeukang.netlify.app
                    </a>{" "}
                    {t("CONDITION.SERVICES.DESCRIPTION_6")}{" "}
                    <a href="https://randrin-nzeukang.netlify.app">
                      https://randrin-nzeukang.netlify.app
                    </a>{" "}
                    {t("CONDITION.SERVICES.DESCRIPTION_7")}
                  </p>
                  <h3>{t("CONDITION.LIMITATIONS.TITLE")}</h3>
                  <p>
                    {t("CONDITION.LIMITATIONS.DESCRIPTION_1")}{" "}
                    <a href="https://randrin-nzeukang.netlify.app">
                      https://randrin-nzeukang.netlify.app
                    </a>{" "}
                    {t("CONDITION.LIMITATIONS.DESCRIPTION_2")}
                  </p>
                  <p>{t("CONDITION.LIMITATIONS.DESCRIPTION_3")}</p>
                  <p>
                    <a href="https://randrin-nzeukang.netlify.app">
                      https://randrin-nzeukang.netlify.app
                    </a>{" "}
                    {t("CONDITION.LIMITATIONS.DESCRIPTION_4")}
                  </p>
                  <h3>{t("CONDITION.PROPERTIES.TITLE")}</h3>
                  <p>
                    <a href="https://randrin-nzeukang.netlify.app">
                      https://randrin-nzeukang.netlify.app
                    </a>{" "}
                    {t("CONDITION.PROPERTIES.DESCRIPTION_1")}{" "}
                    <a href="https://randrin-nzeukang.netlify.app">
                      https://randrin-nzeukang.netlify.app
                    </a>
                    .
                  </p>
                  <p>{t("CONDITION.PROPERTIES.DESCRIPTION_2")}</p>
                  <h3>{t("CONDITION.RESPONSABILITIES.TITLE")}</h3>
                  <p>
                    <a href="https://randrin-nzeukang.netlify.app">
                      https://randrin-nzeukang.netlify.app
                    </a>{" "}
                    {t("CONDITION.RESPONSABILITIES.DESCRIPTION_1")}{" "}
                    <a href="https://randrin-nzeukang.netlify.app">
                      https://randrin-nzeukang.netlify.app
                    </a>{" "}
                    {t("CONDITION.RESPONSABILITIES.DESCRIPTION_2")}{" "}
                  </p>
                  <p>
                    <a href="https://randrin-nzeukang.netlify.app">
                      https://randrin-nzeukang.netlify.app
                    </a>{" "}
                    {t("CONDITION.RESPONSABILITIES.DESCRIPTION_3")}{" "}
                    <a href="https://randrin-nzeukang.netlify.app">
                      https://randrin-nzeukang.netlify.app
                    </a>
                    {t("CONDITION.RESPONSABILITIES.DESCRIPTION_4")}
                  </p>
                  <p>
                    <a href="https://randrin-nzeukang.netlify.app">
                      https://randrin-nzeukang.netlify.app
                    </a>{" "}
                    {t("CONDITION.RESPONSABILITIES.DESCRIPTION_5")}{" "}
                    <a href="https://randrin-nzeukang.netlify.app">
                      https://randrin-nzeukang.netlify.app
                    </a>
                    {t("CONDITION.RESPONSABILITIES.DESCRIPTION_6")}{" "}
                    <a href="https://randrin-nzeukang.netlify.app">
                      https://randrin-nzeukang.netlify.app
                    </a>{" "}
                    {t("CONDITION.RESPONSABILITIES.DESCRIPTION_7")}{" "}
                    <a href="https://randrin-nzeukang.netlify.app">
                      https://randrin-nzeukang.netlify.app
                    </a>{" "}
                    {t("CONDITION.RESPONSABILITIES.DESCRIPTION_8")}
                  </p>
                  <h3>{t("CONDITION.PERSONALS_DATA.TITLE")}</h3>
                  <p>{t("CONDITION.PERSONALS_DATA.DESCRIPTION")} </p>
                  <h3>{t("CONDITION.PERSONALS_DATA.ONE.TITLE")}</h3>
                  <p>
                    {t("CONDITION.PERSONALS_DATA.ONE.DESCRIPTION_1")}{" "}
                    <a href="https://randrin-nzeukang.netlify.app">
                      https://randrin-nzeukang.netlify.app
                    </a>
                    {t("CONDITION.PERSONALS_DATA.ONE.DESCRIPTION_2")}
                  </p>
                  <p>
                    {t("CONDITION.PERSONALS_DATA.ONE.DESCRIPTION_3")}{" "}
                    <a href="https://randrin-nzeukang.netlify.app">
                      https://randrin-nzeukang.netlify.app
                    </a>{" "}
                    {t("CONDITION.PERSONALS_DATA.ONE.DESCRIPTION_4")}{" "}
                    <a href="https://randrin-nzeukang.netlify.app">
                      https://randrin-nzeukang.netlify.app
                    </a>{" "}
                    {t("CONDITION.PERSONALS_DATA.ONE.DESCRIPTION_5")}{" "}
                    <a href="https://randrin-nzeukang.netlify.app">
                      https://randrin-nzeukang.netlify.app
                    </a>{" "}
                    {t("CONDITION.PERSONALS_DATA.ONE.DESCRIPTION_6")}{" "}
                    <a href="https://randrin-nzeukang.netlify.app">
                      https://randrin-nzeukang.netlify.app
                    </a>{" "}
                    {t("CONDITION.PERSONALS_DATA.ONE.DESCRIPTION_7")}
                  </p>
                  <h3>{t("CONDITION.PERSONALS_DATA.TWO.TITLE")}</h3>
                  <p>
                    <a href="https://randrin-nzeukang.netlify.app">
                      https://randrin-nzeukang.netlify.app
                    </a>{" "}
                    {t("CONDITION.PERSONALS_DATA.TWO.DESCRIPTION_1")}{" "}
                  </p>
                  <ul>
                    <li>{t("CONDITION.PERSONALS_DATA.TWO.DESCRIPTION_2")} </li>
                    <li>{t("CONDITION.PERSONALS_DATA.TWO.DESCRIPTION_3")} </li>
                    <li>{t("CONDITION.PERSONALS_DATA.TWO.DESCRIPTION_4")} </li>
                    <li>
                      {t("CONDITION.PERSONALS_DATA.TWO.DESCRIPTION_5")}{" "}
                      <a href="https://randrin-nzeukang.netlify.app">
                        https://randrin-nzeukang.netlify.app
                      </a>{" "}
                      {t("CONDITION.PERSONALS_DATA.TWO.DESCRIPTION_6")}{" "}
                    </li>
                    <li>{t("CONDITION.PERSONALS_DATA.TWO.DESCRIPTION_7")}</li>
                  </ul>
                  <p>
                    <a href="https://randrin-nzeukang.netlify.app">
                      https://randrin-nzeukang.netlify.app
                    </a>{" "}
                    {t("CONDITION.PERSONALS_DATA.TWO.DESCRIPTION_8")}
                  </p>
                  <h3>{t("CONDITION.PERSONALS_DATA.THREE.TITLE")}</h3>
                  <p>
                    {t("CONDITION.PERSONALS_DATA.THREE.DESCRIPTION_1")}{" "}
                    <a href="https://randrin-nzeukang.netlify.app">
                      https://randrin-nzeukang.netlify.app
                    </a>{" "}
                    {t("CONDITION.PERSONALS_DATA.THREE.DESCRIPTION_2")}{" "}
                  </p>
                  <ul>
                    <li>
                      {t("CONDITION.PERSONALS_DATA.THREE.DESCRIPTION_3")}{" "}
                    </li>
                    <li>
                      {t("CONDITION.PERSONALS_DATA.THREE.DESCRIPTION_4")}{" "}
                    </li>
                    <li>
                      {t("CONDITION.PERSONALS_DATA.THREE.DESCRIPTION_5")}{" "}
                    </li>
                    <li>
                      {t("CONDITION.PERSONALS_DATA.THREE.DESCRIPTION_6")}{" "}
                    </li>
                    <li>
                      {t("CONDITION.PERSONALS_DATA.THREE.DESCRIPTION_7")}{" "}
                    </li>
                    <li>
                      {t("CONDITION.PERSONALS_DATA.THREE.DESCRIPTION_8")}{" "}
                      <a href="https://randrin-nzeukang.netlify.app">
                        https://randrin-nzeukang.netlify.app
                      </a>{" "}
                      {t("CONDITION.PERSONALS_DATA.THREE.DESCRIPTION_9")}
                    </li>
                  </ul>
                  <p>
                    {t("CONDITION.PERSONALS_DATA.THREE.DESCRIPTION_10")}{" "}
                    <a href="https://randrin-nzeukang.netlify.app">
                      https://randrin-nzeukang.netlify.app
                    </a>{" "}
                    {t("CONDITION.PERSONALS_DATA.THREE.DESCRIPTION_11")}{" "}
                    <a href="https://randrin-nzeukang.netlify.app">
                      https://randrin-nzeukang.netlify.app
                    </a>{" "}
                    {t("CONDITION.PERSONALS_DATA.THREE.DESCRIPTION_12")}
                  </p>
                  <p>
                    {t("CONDITION.PERSONALS_DATA.THREE.DESCRIPTION_13")}{" "}
                    <a href="https://randrin-nzeukang.netlify.app">
                      https://randrin-nzeukang.netlify.app
                    </a>{" "}
                    {t("CONDITION.PERSONALS_DATA.THREE.DESCRIPTION_14")}{" "}
                    <a href="https://randrin-nzeukang.netlify.app">
                      https://randrin-nzeukang.netlify.app
                    </a>{" "}
                    {t("CONDITION.PERSONALS_DATA.THREE.DESCRIPTION_15")}{" "}
                  </p>
                  {t("CONDITION.PERSONALS_DATA.THREE.DESCRIPTION_16")}
                  <p>
                    {t("CONDITION.PERSONALS_DATA.THREE.DESCRIPTION_17")}{" "}
                    <a href="https://randrin-nzeukang.netlify.app">
                      https://randrin-nzeukang.netlify.app
                    </a>{" "}
                    {t("CONDITION.PERSONALS_DATA.THREE.DESCRIPTION_18")}{" "}
                  </p>
                  <p>
                    {t("CONDITION.PERSONALS_DATA.THREE.DESCRIPTION_19")}{" "}
                    <a href="https://randrin-nzeukang.netlify.app">
                      https://randrin-nzeukang.netlify.app
                    </a>{" "}
                    {t("CONDITION.PERSONALS_DATA.THREE.DESCRIPTION_20")}{" "}
                    <a href="https://randrin-nzeukang.netlify.app">
                      https://randrin-nzeukang.netlify.app
                    </a>{" "}
                    {t("CONDITION.PERSONALS_DATA.THREE.DESCRIPTION_21")}
                  </p>
                  <h3>{t("CONDITION.PERSONALS_DATA.FOURTH.TITLE")}</h3>
                  <p>
                    <a href="https://randrin-nzeukang.netlify.app">
                      https://randrin-nzeukang.netlify.app
                    </a>{" "}
                    {t("CONDITION.PERSONALS_DATA.FOURTH.DESCRIPTION_1")}{" "}
                    <a href="https://randrin-nzeukang.netlify.app">
                      https://randrin-nzeukang.netlify.app
                    </a>{" "}
                    {t("CONDITION.PERSONALS_DATA.FOURTH.DESCRIPTION_2")}
                  </p>
                  <p>
                    <a href="https://randrin-nzeukang.netlify.app">
                      https://randrin-nzeukang.netlify.app
                    </a>{" "}
                    {t("CONDITION.PERSONALS_DATA.FOURTH.DESCRIPTION_3")}{" "}
                    <a href="https://randrin-nzeukang.netlify.app">
                      https://randrin-nzeukang.netlify.app
                    </a>
                    {t("CONDITION.PERSONALS_DATA.FOURTH.DESCRIPTION_4")}{" "}
                    <a href="https://randrin-nzeukang.netlify.app">
                      https://randrin-nzeukang.netlify.app
                    </a>{" "}
                    {t("CONDITION.PERSONALS_DATA.FOURTH.DESCRIPTION_5")}
                  </p>
                  <p>
                    {t("CONDITION.PERSONALS_DATA.FOURTH.DESCRIPTION_6")}{" "}
                    <a href="https://randrin-nzeukang.netlify.app">
                      https://randrin-nzeukang.netlify.app
                    </a>{" "}
                    {t("CONDITION.PERSONALS_DATA.FOURTH.DESCRIPTION_7")}
                  </p>
                  <p>
                    {t("CONDITION.PERSONALS_DATA.FOURTH.DESCRIPTION_8")}{" "}
                    <a href="https://randrin-nzeukang.netlify.app">
                      https://randrin-nzeukang.netlify.app
                    </a>{" "}
                    {t("CONDITION.PERSONALS_DATA.FOURTH.DESCRIPTION_9")}
                  </p>
                  <div ng-bind-html="rgpdHTML"></div>
                  <h2>8. Notification d’incident</h2>
                  <p>
                    Quels que soient les efforts fournis, aucune méthode de
                    transmission sur Internet et aucune méthode de stockage
                    électronique n'est complètement sûre. Nous ne pouvons en
                    conséquence pas garantir une sécurité absolue. Si nous
                    prenions connaissance d'une brèche de la sécurité, nous
                    avertirions les utilisateurs concernés afin qu'ils puissent
                    prendre les mesures appropriées. Nos procédures de
                    notification d’incident tiennent compte de nos obligations
                    légales, qu'elles se situent au niveau national ou européen.
                    Nous nous engageons à informer pleinement nos clients de
                    toutes les questions relevant de la sécurité de leur compte
                    et à leur fournir toutes les informations nécessaires pour
                    les aider à respecter leurs propres obligations
                    réglementaires en matière de reporting.
                  </p>
                  <p>
                    Aucune information personnelle de l'utilisateur du site{" "}
                    <a href="https://randrin-nzeukang.netlify.app">
                      https://randrin-nzeukang.netlify.app
                    </a>{" "}
                    n'est publiée à l'insu de l'utilisateur, échangée,
                    transférée, cédée ou vendue sur un support quelconque à des
                    tiers. Seule l'hypothèse du rachat de{" "}
                    <a href="https://randrin-nzeukang.netlify.app">
                      https://randrin-nzeukang.netlify.app
                    </a>{" "}
                    et de ses droits permettrait la transmission des dites
                    informations à l'éventuel acquéreur qui serait à son tour
                    tenu de la même obligation de conservation et de
                    modification des données vis à vis de l'utilisateur du site{" "}
                    <a href="https://randrin-nzeukang.netlify.app">
                      https://randrin-nzeukang.netlify.app
                    </a>
                    .
                  </p>
                  <h3>Sécurité</h3>
                  <p>
                    Pour assurer la sécurité et la confidentialité des Données
                    Personnelles et des Données Personnelles de Santé,{" "}
                    <a href="https://randrin-nzeukang.netlify.app">
                      https://randrin-nzeukang.netlify.app
                    </a>{" "}
                    utilise des réseaux protégés par des dispositifs standards
                    tels que par pare-feu, la pseudonymisation, l’encryption et
                    mot de passe.{" "}
                  </p>
                  <p>
                    Lors du traitement des Données Personnelles,{" "}
                    <a href="https://randrin-nzeukang.netlify.app">
                      https://randrin-nzeukang.netlify.app
                    </a>
                    prend toutes les mesures raisonnables visant à les protéger
                    contre toute perte, utilisation détournée, accès non
                    autorisé, divulgation, altération ou destruction.
                  </p>
                  <h2>
                    9. Liens hypertextes « cookies » et balises (“tags”)
                    internet
                  </h2>
                  <p>
                    Le site{" "}
                    <a href="https://randrin-nzeukang.netlify.app">
                      https://randrin-nzeukang.netlify.app
                    </a>{" "}
                    contient un certain nombre de liens hypertextes vers
                    d’autres sites, mis en place avec l’autorisation de{" "}
                    <a href="https://randrin-nzeukang.netlify.app">
                      https://randrin-nzeukang.netlify.app
                    </a>
                    . Cependant,{" "}
                    <a href="https://randrin-nzeukang.netlify.app">
                      https://randrin-nzeukang.netlify.app
                    </a>{" "}
                    n’a pas la possibilité de vérifier le contenu des sites
                    ainsi visités, et n’assumera en conséquence aucune
                    responsabilité de ce fait.
                  </p>
                  Sauf si vous décidez de désactiver les cookies, vous acceptez
                  que le site puisse les utiliser. Vous pouvez à tout moment
                  désactiver ces cookies et ce gratuitement à partir des
                  possibilités de désactivation qui vous sont offertes et
                  rappelées ci-après, sachant que cela peut réduire ou empêcher
                  l’accessibilité à tout ou partie des Services proposés par le
                  site.
                  <p></p>
                  <h3>9.1. « COOKIES »</h3>
                  <p>
                    Un « cookie » est un petit fichier d’information envoyé sur
                    le navigateur de l’Utilisateur et enregistré au sein du
                    terminal de l’Utilisateur (ex : ordinateur, smartphone),
                    (ci-après « Cookies »). Ce fichier comprend des informations
                    telles que le nom de domaine de l’Utilisateur, le
                    fournisseur d’accès Internet de l’Utilisateur, le système
                    d’exploitation de l’Utilisateur, ainsi que la date et
                    l’heure d’accès. Les Cookies ne risquent en aucun cas
                    d’endommager le terminal de l’Utilisateur.
                  </p>
                  <p>
                    <a href="https://randrin-nzeukang.netlify.app">
                      https://randrin-nzeukang.netlify.app
                    </a>{" "}
                    est susceptible de traiter les informations de l’Utilisateur
                    concernant sa visite du Site, telles que les pages
                    consultées, les recherches effectuées. Ces informations
                    permettent à{" "}
                    <a href="https://randrin-nzeukang.netlify.app">
                      https://randrin-nzeukang.netlify.app
                    </a>{" "}
                    d’améliorer le contenu du Site, de la navigation de
                    l’Utilisateur.
                  </p>
                  <p>
                    Les Cookies facilitant la navigation et/ou la fourniture des
                    services proposés par le Site, l’Utilisateur peut configurer
                    son navigateur pour qu’il lui permette de décider s’il
                    souhaite ou non les accepter de manière à ce que des Cookies
                    soient enregistrés dans le terminal ou, au contraire, qu’ils
                    soient rejetés, soit systématiquement, soit selon leur
                    émetteur. L’Utilisateur peut également configurer son
                    logiciel de navigation de manière à ce que l’acceptation ou
                    le refus des Cookies lui soient proposés ponctuellement,
                    avant qu’un Cookie soit susceptible d’être enregistré dans
                    son terminal.{" "}
                    <a href="https://randrin-nzeukang.netlify.app">
                      https://randrin-nzeukang.netlify.app
                    </a>{" "}
                    informe l’Utilisateur que, dans ce cas, il se peut que les
                    fonctionnalités de son logiciel de navigation ne soient pas
                    toutes disponibles.
                  </p>
                  <p>
                    Si l’Utilisateur refuse l’enregistrement de Cookies dans son
                    terminal ou son navigateur, ou si l’Utilisateur supprime
                    ceux qui y sont enregistrés, l’Utilisateur est informé que
                    sa navigation et son expérience sur le Site peuvent être
                    limitées. Cela pourrait également être le cas lorsque{" "}
                    <a href="https://randrin-nzeukang.netlify.app">
                      https://randrin-nzeukang.netlify.app
                    </a>{" "}
                    ou l’un de ses prestataires ne peut pas reconnaître, à des
                    fins de compatibilité technique, le type de navigateur
                    utilisé par le terminal, les paramètres de langue et
                    d’affichage ou le pays depuis lequel le terminal semble
                    connecté à Internet.
                  </p>
                  <p>
                    Le cas échéant,{" "}
                    <a href="https://randrin-nzeukang.netlify.app">
                      https://randrin-nzeukang.netlify.app
                    </a>{" "}
                    décline toute responsabilité pour les conséquences liées au
                    fonctionnement dégradé du Site et des services
                    éventuellement proposés par{" "}
                    <a href="https://randrin-nzeukang.netlify.app">
                      https://randrin-nzeukang.netlify.app
                    </a>
                    , résultant (i) du refus de Cookies par l’Utilisateur (ii)
                    de l’impossibilité pour{" "}
                    <a href="https://randrin-nzeukang.netlify.app">
                      https://randrin-nzeukang.netlify.app
                    </a>{" "}
                    d’enregistrer ou de consulter les Cookies nécessaires à leur
                    fonctionnement du fait du choix de l’Utilisateur. Pour la
                    gestion des Cookies et des choix de l’Utilisateur, la
                    configuration de chaque navigateur est différente. Elle est
                    décrite dans le menu d’aide du navigateur, qui permettra de
                    savoir de quelle manière l’Utilisateur peut modifier ses
                    souhaits en matière de Cookies.
                  </p>
                  <p>
                    À tout moment, l’Utilisateur peut faire le choix d’exprimer
                    et de modifier ses souhaits en matière de Cookies.{" "}
                    <a href="https://randrin-nzeukang.netlify.app">
                      https://randrin-nzeukang.netlify.app
                    </a>{" "}
                    pourra en outre faire appel aux services de prestataires
                    externes pour l’aider à recueillir et traiter les
                    informations décrites dans cette section.
                  </p>
                  <p>
                    Enfin, en cliquant sur les icônes dédiées aux réseaux
                    sociaux Twitter, Facebook, Linkedin et Google Plus figurant
                    sur le Site de{" "}
                    <a href="https://randrin-nzeukang.netlify.app">
                      https://randrin-nzeukang.netlify.app
                    </a>{" "}
                    ou dans son application mobile et si l’Utilisateur a accepté
                    le dépôt de cookies en poursuivant sa navigation sur le Site
                    Internet ou l’application mobile de{" "}
                    <a href="https://randrin-nzeukang.netlify.app">
                      https://randrin-nzeukang.netlify.app
                    </a>
                    , Twitter, Facebook, Linkedin et Google Plus peuvent
                    également déposer des cookies sur vos terminaux (ordinateur,
                    tablette, téléphone portable).
                  </p>
                  <p>
                    Ces types de cookies ne sont déposés sur vos terminaux qu’à
                    condition que vous y consentiez, en continuant votre
                    navigation sur le Site Internet ou l’application mobile de{" "}
                    <a href="https://randrin-nzeukang.netlify.app">
                      https://randrin-nzeukang.netlify.app
                    </a>
                    . À tout moment, l’Utilisateur peut néanmoins revenir sur
                    son consentement à ce que{" "}
                    <a href="https://randrin-nzeukang.netlify.app">
                      https://randrin-nzeukang.netlify.app
                    </a>{" "}
                    dépose ce type de cookies.
                  </p>
                  <h3>Article 9.2. BALISES (“TAGS”) INTERNET</h3>
                  <p>
                    <a href="https://randrin-nzeukang.netlify.app">
                      https://randrin-nzeukang.netlify.app
                    </a>{" "}
                    peut employer occasionnellement des balises Internet
                    (également appelées « tags », ou balises d’action, GIF à un
                    pixel, GIF transparents, GIF invisibles et GIF un à un) et
                    les déployer par l’intermédiaire d’un partenaire spécialiste
                    d’analyses Web susceptible de se trouver (et donc de stocker
                    les informations correspondantes, y compris l’adresse IP de
                    l’Utilisateur) dans un pays étranger.
                  </p>
                  <p>
                    Ces balises sont placées à la fois dans les publicités en
                    ligne permettant aux internautes d’accéder au Site, et sur
                    les différentes pages de celui-ci.
                  </p>
                  <p>
                    Cette technologie permet à{" "}
                    <a href="https://randrin-nzeukang.netlify.app">
                      https://randrin-nzeukang.netlify.app
                    </a>{" "}
                    d’évaluer les réponses des visiteurs face au Site et
                    l’efficacité de ses actions (par exemple, le nombre de fois
                    où une page est ouverte et les informations consultées),
                    ainsi que l’utilisation de ce Site par l’Utilisateur.{" "}
                  </p>
                  <p>
                    Le prestataire externe pourra éventuellement recueillir des
                    informations sur les visiteurs du Site et d’autres sites
                    Internet grâce à ces balises, constituer des rapports sur
                    l’activité du Site à l’attention de{" "}
                    <a href="https://randrin-nzeukang.netlify.app">
                      https://randrin-nzeukang.netlify.app
                    </a>
                    , et fournir d’autres services relatifs à l’utilisation de
                    celui-ci et d’Internet.
                  </p>
                  <p></p>
                  <h2>10. Droit applicable et attribution de juridiction.</h2>
                  <p>
                    Tout litige en relation avec l’utilisation du site{" "}
                    <a href="https://randrin-nzeukang.netlify.app">
                      https://randrin-nzeukang.netlify.app
                    </a>{" "}
                    est soumis au droit français. En dehors des cas où la loi ne
                    le permet pas, il est fait attribution exclusive de
                    juridiction aux tribunaux compétents de Randrin Nzeukang
                  </p>
                </div>
              </div>
              <Footer />
            </>
          )}
        </Translation>
      </section>
    );
  }
}
