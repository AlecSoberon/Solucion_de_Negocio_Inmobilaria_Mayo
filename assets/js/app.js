(() => {
  const state = {
    clientes: [
      { cliente_id: 1, nombres: "Lucia", apellidos: "Paredes Soto", canal_id: 2, telefono: "945223311", email: "lucia.paredes@mail.com" }
    ],
    canales: [
      { canal_id: 1, canal: "Presencial" },
      { canal_id: 2, canal: "WhatsApp" },
      { canal_id: 3, canal: "Web" },
      { canal_id: 4, canal: "Portal inmobiliario" }
    ],
    proyectos: [
      { proyecto_id: 1, nombre_proyecto: "Mirador del Sol", distrito: "Santiago de Surco" },
      { proyecto_id: 2, nombre_proyecto: "Parque Central", distrito: "San Miguel" }
    ],
    torres: [
      { torre_id: 1, proyecto_id: 1, nombre_torre: "Torre A" },
      { torre_id: 2, proyecto_id: 1, nombre_torre: "Torre B" },
      { torre_id: 3, proyecto_id: 2, nombre_torre: "Torre Norte" }
    ],
    tiposUnidad: [
      { tipo_unidad_id: 1, descripcion: "Flat 1 dormitorio", habitaciones: 1, banos: 1 },
      { tipo_unidad_id: 2, descripcion: "Flat 2 dormitorios", habitaciones: 2, banos: 2 },
      { tipo_unidad_id: 3, descripcion: "Flat 3 dormitorios", habitaciones: 3, banos: 2 }
    ],
    unidades: [
      { unidad_id: 101, torre_id: 1, tipo_unidad_id: 2, piso: 6, numero_unidad: "A-602", metraje_m2: 72, precio_lista: 430000, estado_unidad_id: 1 },
      { unidad_id: 102, torre_id: 1, tipo_unidad_id: 3, piso: 8, numero_unidad: "A-804", metraje_m2: 93, precio_lista: 560000, estado_unidad_id: 1 },
      { unidad_id: 103, torre_id: 2, tipo_unidad_id: 2, piso: 11, numero_unidad: "B-1103", metraje_m2: 75, precio_lista: 470000, estado_unidad_id: 1 },
      { unidad_id: 104, torre_id: 3, tipo_unidad_id: 1, piso: 4, numero_unidad: "N-404", metraje_m2: 48, precio_lista: 290000, estado_unidad_id: 1 },
      { unidad_id: 105, torre_id: 3, tipo_unidad_id: 2, piso: 10, numero_unidad: "N-1002", metraje_m2: 70, precio_lista: 410000, estado_unidad_id: 2 },
      { unidad_id: 106, torre_id: 1, tipo_unidad_id: 1, piso: 3, numero_unidad: "A-303", metraje_m2: 42, precio_lista: 198000, estado_unidad_id: 1 },
      { unidad_id: 107, torre_id: 1, tipo_unidad_id: 1, piso: 5, numero_unidad: "A-505", metraje_m2: 45, precio_lista: 210000, estado_unidad_id: 1 },
      { unidad_id: 108, torre_id: 2, tipo_unidad_id: 3, piso: 9, numero_unidad: "B-904", metraje_m2: 88, precio_lista: 520000, estado_unidad_id: 1 },
      { unidad_id: 109, torre_id: 3, tipo_unidad_id: 1, piso: 7, numero_unidad: "N-705", metraje_m2: 46, precio_lista: 270000, estado_unidad_id: 1 },
      { unidad_id: 110, torre_id: 3, tipo_unidad_id: 2, piso: 12, numero_unidad: "N-1201", metraje_m2: 68, precio_lista: 395000, estado_unidad_id: 1 }
    ],
    estadoUnidad: [
      { estado_unidad_id: 1, estado_unidad: "Disponible" },
      { estado_unidad_id: 2, estado_unidad: "Separada" },
      { estado_unidad_id: 3, estado_unidad: "Vendida" }
    ],
    vendedores: [
      { vendedor_id: 1, nombre_vendedor: "Mariana Gomez", telefono_empresarial: "994110021", carga_actual: 5, especialidad_proyecto: 1 },
      { vendedor_id: 2, nombre_vendedor: "Carlos Salinas", telefono_empresarial: "994110022", carga_actual: 3, especialidad_proyecto: 2 },
      { vendedor_id: 3, nombre_vendedor: "Renato Rios", telefono_empresarial: "994110023", carga_actual: 4, especialidad_proyecto: 1 }
    ],
    leads: [
      {
        lead_id: 1001,
        cliente_id: 1,
        unidad_id: null,
        vendedor_id: null,
        canal_id: 2,
        fecha_inicio_lead: "2026-05-09",
        presupuesto_max: 480000,
        urgencia: "Alta",
        descuento_ofrecido: 0,
        precio_venta_ofrecido: 0,
        prioridad: "Media",
        estado_gestion: "Nuevo",
        observaciones: ""
      }
    ]
  };

  const $ = (id) => document.getElementById(id);
  const money = (value) => Number(value || 0).toLocaleString("es-PE");

  function nextId(collection, key) {
    return collection.length ? Math.max(...collection.map((x) => x[key])) + 1 : 1;
  }

  function findCanal(canalId) {
    return state.canales.find((c) => c.canal_id === Number(canalId));
  }

  function getUnidadDetalle(unidadId) {
    const unidad = state.unidades.find((u) => u.unidad_id === Number(unidadId));
    if (!unidad) return null;
    const torre = state.torres.find((t) => t.torre_id === unidad.torre_id);
    const proyecto = state.proyectos.find((p) => p.proyecto_id === torre.proyecto_id);
    const tipo = state.tiposUnidad.find((t) => t.tipo_unidad_id === unidad.tipo_unidad_id);
    return { unidad, torre, proyecto, tipo };
  }

  // Preparadas para conectar endpoints reales.
  function apiSaveCliente(payload) {
    return Promise.resolve(payload);
  }

  function apiCreateLead(payload) {
    return Promise.resolve(payload);
  }

  function apiUpdateLead(payload) {
    return Promise.resolve(payload);
  }

  function renderSelect(selectId, options, valueKey, labelKey, placeholder = "Seleccione") {
    const select = $(selectId);
    if (!select) return;
    select.innerHTML = `<option value="">${placeholder}</option>`;
    options.forEach((item) => {
      const option = document.createElement("option");
      option.value = item[valueKey];
      option.textContent = item[labelKey];
      select.appendChild(option);
    });
  }

  function renderLeadsSelects() {
    const options = state.leads.map((lead) => {
      const cliente = state.clientes.find((c) => c.cliente_id === lead.cliente_id);
      return {
        id: lead.lead_id,
        label: `${lead.lead_id} · ${(cliente?.nombres || "")} ${(cliente?.apellidos || "")}`
      };
    });
    ["leadUnidad", "leadAsignacion", "agLeadId", "agLeadAsesor"].forEach((id) => {
      renderSelect(id, options, "id", "label", "Seleccione lead");
    });
  }

  function renderBaseCatalogs() {
    renderSelect("canalCliente", state.canales, "canal_id", "canal", "Seleccione canal");
    renderSelect("filtroProyecto", state.proyectos, "proyecto_id", "nombre_proyecto", "Todos");
    renderSelect("filtroTorre", state.torres, "torre_id", "nombre_torre", "Todas");
    renderSelect("filtroTipoUnidad", state.tiposUnidad, "tipo_unidad_id", "descripcion", "Todos");
    renderSelect("asesorSugerido", state.vendedores, "vendedor_id", "nombre_vendedor", "Seleccione asesor");
    const distritos = [...new Set(state.proyectos.map((p) => p.distrito))].map((distrito, index) => ({ id: index + 1, distrito }));
    renderSelect("agDistrito", distritos, "distrito", "distrito", "Seleccione distrito");
  }

  function setKpis() {
    $("kpiClientes").textContent = state.clientes.length;
    $("kpiLeads").textContent = state.leads.length;
    $("kpiUnidades").textContent = state.unidades.filter((u) => u.estado_unidad_id === 1).length;
    $("kpiAsignados").textContent = state.leads.filter((l) => !!l.vendedor_id).length;
  }

  function getFilteredUnits(options = {}) {
    const ignoreBudget = options.ignoreBudget || false;
    const ignoreRooms = options.ignoreRooms || false;
    const ignoreType = options.ignoreType || false;
    const proyectoId = Number($("filtroProyecto").value || 0);
    const torreId = Number($("filtroTorre").value || 0);
    const tipoUnidadId = Number($("filtroTipoUnidad").value || 0);
    const habitaciones = Number($("filtroHabitaciones").value || 0);
    const presupuesto = Number($("filtroPresupuesto").value || 0);

    return state.unidades.filter((unidad) => {
      if (unidad.estado_unidad_id !== 1) return false;
      const torre = state.torres.find((t) => t.torre_id === unidad.torre_id);
      const tipo = state.tiposUnidad.find((t) => t.tipo_unidad_id === unidad.tipo_unidad_id);
      if (!torre || !tipo) return false;
      if (proyectoId && torre.proyecto_id !== proyectoId) return false;
      if (torreId && unidad.torre_id !== torreId) return false;
      if (!ignoreType && tipoUnidadId && unidad.tipo_unidad_id !== tipoUnidadId) return false;
      if (!ignoreRooms && habitaciones && tipo.habitaciones !== habitaciones) return false;
      if (!ignoreBudget && presupuesto && unidad.precio_lista > presupuesto) return false;
      return true;
    });
  }

  function getAvailableUnitsWithFallback() {
    let units = getFilteredUnits();
    if (units.length) return { units, fallback: "" };

    units = getFilteredUnits({ ignoreBudget: true });
    if (units.length) return { units, fallback: "No hubo unidades dentro del presupuesto. Se muestran unidades disponibles que coinciden con proyecto, torre y tipo." };

    units = getFilteredUnits({ ignoreBudget: true, ignoreRooms: true });
    if (units.length) return { units, fallback: "No hubo coincidencias exactas de habitaciones. Se muestran unidades disponibles según proyecto, torre y tipo." };

    units = getFilteredUnits({ ignoreBudget: true, ignoreRooms: true, ignoreType: true });
    if (units.length) return { units, fallback: "No hubo coincidencias exactas. Se muestran unidades disponibles para el proyecto o torre seleccionada." };

    units = state.unidades.filter((unidad) => unidad.estado_unidad_id === 1);
    return { units, fallback: "No hubo coincidencias con los filtros. Se muestran todas las unidades disponibles." };
  }

  function updateTorreOptions() {
    const proyectoId = Number($("filtroProyecto")?.value || 0);
    const torres = proyectoId ? state.torres.filter((torre) => torre.proyecto_id === proyectoId) : state.torres;
    const current = $("filtroTorre")?.value;
    renderSelect("filtroTorre", torres, "torre_id", "nombre_torre", "Todas");
    if (torres.some((torre) => String(torre.torre_id) === String(current))) {
      $("filtroTorre").value = current;
    }
  }

  function renderFilteredUnits() {
    const result = getAvailableUnitsWithFallback();
    const filtered = result.units.map((unidad) => {
      const detail = getUnidadDetalle(unidad.unidad_id);
      return {
        unidad_id: unidad.unidad_id,
        label: `${detail.proyecto.nombre_proyecto} | ${detail.torre.nombre_torre} | ${unidad.numero_unidad} | ${detail.tipo.descripcion} | S/ ${money(unidad.precio_lista)}`
      };
    });
    renderSelect("unidadDisponible", filtered, "unidad_id", "label", "Seleccione unidad");
    $("precioLista").value = "";
    $("precioOfertado").value = "";
    if ($("unidadResultado")) {
      $("unidadResultado").textContent = result.fallback;
    }
  }

  function updateUnidadPricing() {
    const unidad = state.unidades.find((u) => u.unidad_id === Number($("unidadDisponible").value));
    const descuento = Number(document.querySelector("#formUnidad [name='descuento']").value || 0);
    if (!unidad) return;
    $("precioLista").value = unidad.precio_lista;
    $("precioOfertado").value = Math.max(unidad.precio_lista - descuento, 0);
  }

  function refreshAsignacionContext() {
    const lead = state.leads.find((l) => l.lead_id === Number($("leadAsignacion").value));
    if (!lead) {
      $("asigCliente").value = "";
      $("asigCanal").value = "";
      $("asigProyecto").value = "";
      return;
    }
    const cliente = state.clientes.find((c) => c.cliente_id === lead.cliente_id);
    const canal = findCanal(lead.canal_id);
    const detail = lead.unidad_id ? getUnidadDetalle(lead.unidad_id) : null;
    $("asigCliente").value = `${cliente?.nombres || ""} ${cliente?.apellidos || ""}`.trim();
    $("asigCanal").value = canal?.canal || "";
    $("asigProyecto").value = detail?.proyecto?.nombre_proyecto || "Sin proyecto seleccionado";
    $("asigPrioridad").value = lead.prioridad || "Media";
  }

  function renderLeadsTable() {
    const tbody = $("tablaLeadsAsignados");
    tbody.innerHTML = "";
    state.leads.forEach((lead) => {
      const cliente = state.clientes.find((c) => c.cliente_id === lead.cliente_id);
      const canal = findCanal(lead.canal_id);
      const vendedor = state.vendedores.find((v) => v.vendedor_id === lead.vendedor_id);
      const detail = lead.unidad_id ? getUnidadDetalle(lead.unidad_id) : null;
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td>${lead.lead_id}</td>
        <td>${cliente ? `${cliente.nombres} ${cliente.apellidos}` : "-"}</td>
        <td>${canal?.canal || "-"}</td>
        <td>${detail?.proyecto?.nombre_proyecto || "-"}</td>
        <td>${detail?.unidad?.numero_unidad || "-"}</td>
        <td>${vendedor?.nombre_vendedor || "-"}</td>
        <td>${lead.prioridad || "-"}</td>
        <td>${lead.estado_gestion || "Nuevo"}</td>
      `;
      tbody.appendChild(tr);
    });
  }

  function calculateLeadScore(lead) {
    let score = 0;
    const canal = findCanal(lead.canal_id)?.canal || "";
    if (canal === "Presencial") score += 28;
    if (canal === "WhatsApp") score += 25;
    if (lead.presupuesto_max >= 550000) score += 28;
    else if (lead.presupuesto_max >= 400000) score += 18;
    else score += 10;
    if (lead.urgencia === "Alta") score += 24;
    else if (lead.urgencia === "Media") score += 14;
    else score += 6;
    if (lead.unidad_id) {
      const unidad = state.unidades.find((u) => u.unidad_id === lead.unidad_id);
      if (unidad?.estado_unidad_id === 1) score += 20;
      else score += 10;
    }
    return Math.min(score, 100);
  }

  function scoreToPriority(score) {
    if (score >= 75) return { prioridad: "Alta", accion: "Contacto en menos de 2 horas" };
    if (score >= 45) return { prioridad: "Media", accion: "Gestionar en la jornada actual" };
    return { prioridad: "Baja", accion: "Nutrir y programar seguimiento" };
  }

  function recommendAdvisor(lead, priorityOverride) {
    const canal = findCanal(lead.canal_id)?.canal || "";
    const detail = lead.unidad_id ? getUnidadDetalle(lead.unidad_id) : null;
    const projectId = detail?.proyecto?.proyecto_id || 0;
    const priority = priorityOverride || lead.prioridad || "Media";

    let candidates = state.vendedores.slice().sort((a, b) => a.carga_actual - b.carga_actual);
    if (projectId) {
      const projectCandidates = candidates.filter((v) => v.especialidad_proyecto === projectId);
      if (projectCandidates.length) candidates = projectCandidates;
    }
    if (priority === "Alta" && (canal === "Presencial" || canal === "WhatsApp")) {
      candidates = candidates.sort((a, b) => a.carga_actual - b.carga_actual);
    }
    return candidates[0];
  }

  function bindEvents() {
    const today = new Date().toISOString().split("T")[0];
    document.querySelector("#formCliente [name='fecha_registro']").value = today;

    $("formCliente").addEventListener("submit", async (event) => {
      event.preventDefault();
      const data = Object.fromEntries(new FormData(event.target).entries());

      const cliente = {
        cliente_id: nextId(state.clientes, "cliente_id"),
        tipo_documento: data.tipo_documento,
        num_documento: data.num_documento,
        nombres: data.nombres,
        apellidos: data.apellidos,
        telefono: data.telefono,
        email: data.email,
        fecha_registro: data.fecha_registro
      };
      await apiSaveCliente(cliente);
      state.clientes.push(cliente);

      const lead = {
        lead_id: nextId(state.leads, "lead_id"),
        unidad_id: null,
        cliente_id: cliente.cliente_id,
        vendedor_id: null,
        canal_id: Number(data.canal_id),
        costo_lead: 0,
        fecha_inicio_lead: data.fecha_registro,
        descuento_ofrecido: 0,
        precio_venta_ofrecido: 0,
        presupuesto_max: Number(data.presupuesto),
        urgencia: data.urgencia,
        prioridad: "Media",
        estado_gestion: "Nuevo",
        observaciones: ""
      };
      await apiCreateLead(lead);
      state.leads.push(lead);

      $("registroResultado").textContent = `Cliente ${cliente.nombres} ${cliente.apellidos} registrado y lead ${lead.lead_id} creado correctamente.`;
      event.target.reset();
      document.querySelector("#formCliente [name='fecha_registro']").value = today;
      renderLeadsSelects();
      renderLeadsTable();
      setKpis();
    });

    $("btnFiltrarUnidades").addEventListener("click", renderFilteredUnits);
    ["filtroProyecto", "filtroTorre", "filtroTipoUnidad", "filtroHabitaciones", "filtroPresupuesto"].forEach((id) => {
      const el = $(id);
      if (!el) return;
      el.addEventListener("change", () => {
        if (id === "filtroProyecto") updateTorreOptions();
        renderFilteredUnits();
      });
      if (id === "filtroPresupuesto") el.addEventListener("input", renderFilteredUnits);
    });
    $("unidadDisponible").addEventListener("change", updateUnidadPricing);
    document.querySelector("#formUnidad [name='descuento']").addEventListener("input", updateUnidadPricing);

    $("formUnidad").addEventListener("submit", async (event) => {
      event.preventDefault();
      const data = Object.fromEntries(new FormData(event.target).entries());
      const lead = state.leads.find((l) => l.lead_id === Number(data.lead_id));
      const unidad = state.unidades.find((u) => u.unidad_id === Number(data.unidad_id));
      if (!lead || !unidad) return;

      lead.unidad_id = unidad.unidad_id;
      lead.descuento_ofrecido = Number(data.descuento || 0);
      lead.precio_venta_ofrecido = Math.max(unidad.precio_lista - lead.descuento_ofrecido, 0);
      await apiUpdateLead(lead);

      $("unidadResultado").textContent = `Unidad ${unidad.numero_unidad} asociada al lead ${lead.lead_id}. Precio ofertado: S/ ${money(lead.precio_venta_ofrecido)}.`;
      refreshAsignacionContext();
      renderLeadsTable();
    });

    $("leadAsignacion").addEventListener("change", refreshAsignacionContext);

    $("formAsignacion").addEventListener("submit", async (event) => {
      event.preventDefault();
      const data = Object.fromEntries(new FormData(event.target).entries());
      const lead = state.leads.find((l) => l.lead_id === Number(data.lead_id));
      if (!lead) return;
      lead.vendedor_id = Number(data.vendedor_id);
      lead.prioridad = data.prioridad;
      lead.estado_gestion = data.estado_gestion;
      lead.observaciones = data.observaciones || "";
      await apiUpdateLead(lead);

      const vendedor = state.vendedores.find((v) => v.vendedor_id === lead.vendedor_id);
      if (vendedor) vendedor.carga_actual += 1;

      $("asignacionResultado").textContent = `Lead ${lead.lead_id} asignado a ${vendedor?.nombre_vendedor || "asesor"} con prioridad ${lead.prioridad}.`;
      renderLeadsTable();
      setKpis();
    });

    $("btnCalificarLead").addEventListener("click", () => {
      const leadId = Number($("agLeadId").value);
      const lead = state.leads.find((l) => l.lead_id === leadId);
      if (!lead) return;
      const score = calculateLeadScore(lead);
      const decision = scoreToPriority(score);
      lead.prioridad = decision.prioridad;
      $("agLeadSalida").innerHTML = `
        <p><strong>Score:</strong> ${score}/100</p>
        <p><strong>Prioridad:</strong> ${decision.prioridad}</p>
        <p><strong>Acción recomendada:</strong> ${decision.accion}</p>
        <p><strong>Explicación:</strong> Se evaluó canal de origen, presupuesto, urgencia e interés por unidad disponible.</p>
      `;
      refreshAsignacionContext();
      renderLeadsTable();
    });

    $("formAgenteUnidad").addEventListener("submit", (event) => {
      event.preventDefault();
      const data = Object.fromEntries(new FormData(event.target).entries());
      const budget = Number(data.presupuesto_max);
      const rooms = Number(data.habitaciones);
      const district = data.distrito;
      const pref = (data.preferencia || "").toLowerCase();

      const ranked = state.unidades
        .filter((u) => u.estado_unidad_id === 1)
        .map((u) => {
          const detail = getUnidadDetalle(u.unidad_id);
          const matchesRooms = detail.tipo.habitaciones === rooms;
          const matchesDistrict = detail.proyecto.distrito === district;
          const inBudget = u.precio_lista <= budget;
          let score = 0;
          if (inBudget) score += 40;
          if (matchesRooms) score += 35;
          if (matchesDistrict) score += 20;
          if (pref.includes("piso alto") && u.piso >= 8) score += 10;
          if (pref.includes("metraje") && u.metraje_m2 >= 70) score += 10;
          return { ...u, detail, score };
        })
        .sort((a, b) => b.score - a.score);

      const top = ranked[0];
      if (!top) {
        $("agUnidadSalida").innerHTML = "<p>No se encontraron unidades para esos criterios.</p>";
        return;
      }
      $("agUnidadSalida").innerHTML = `
        <p><strong>Unidad recomendada:</strong> ${top.numero_unidad}</p>
        <p><strong>Precio:</strong> S/ ${money(top.precio_lista)}</p>
        <p><strong>Metraje:</strong> ${top.metraje_m2} m2</p>
        <p><strong>Proyecto:</strong> ${top.detail.proyecto.nombre_proyecto}</p>
        <p><strong>Razón:</strong> coincide con presupuesto, habitaciones y zona objetivo.</p>
      `;
    });

    $("formAgenteAsesor").addEventListener("submit", (event) => {
      event.preventDefault();
      const data = Object.fromEntries(new FormData(event.target).entries());
      const lead = state.leads.find((l) => l.lead_id === Number(data.lead_id));
      if (!lead) return;
      const advisor = recommendAdvisor(lead, data.prioridad);
      if (!advisor) return;

      $("agAsesorSalida").innerHTML = `
        <p><strong>Asesor recomendado:</strong> ${advisor.nombre_vendedor}</p>
        <p><strong>Motivo:</strong> menor carga activa y experiencia en proyecto de interés.</p>
        <p><strong>Siguiente acción:</strong> contacto comercial inmediato y registro de gestión en bandeja.</p>
      `;
      $("asesorSugerido").value = advisor.vendedor_id;
      $("asigPrioridad").value = data.prioridad;
    });
  }

  function init() {
    if (!$("formCliente")) return;
    renderBaseCatalogs();
    updateTorreOptions();
    renderLeadsSelects();
    renderFilteredUnits();
    refreshAsignacionContext();
    renderLeadsTable();
    setKpis();
    bindEvents();
  }

  document.addEventListener("DOMContentLoaded", init);
})();
