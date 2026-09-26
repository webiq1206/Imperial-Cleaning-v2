/**
 * Commercial and construction cleaning service hub pages.
 *
 * These pages target high-intent service queries under /commercial-cleaning
 * and /construction-cleaning. Content follows operator-level scope: process,
 * inspection points, and scheduling realities. No named clients, contract
 * counts, or unverifiable certifications.
 */

import type { IndustryPage } from "@/data/industries";

export const serviceHubs: IndustryPage[] = [
  {
    slug: "janitorial-services",
    name: "Janitorial Services",
    metaTitle: "Janitorial Services Idaho Falls & Utah | Imperial Cleaning",
    metaDescription:
      "Recurring janitorial services for Idaho Falls, Eastern Idaho, and Utah facilities. Licensed, insured crews and written, scope-based quotes. Call (208) 520-3202.",
    h1: "Janitorial Services for Idaho and Utah Facilities",
    intro:
      "Janitorial service is the recurring backbone of a clean building: restrooms, trash, floors, and touchpoints on a schedule your staff can rely on. Imperial Cleaning, founded in 2015 and headquartered at 2653 Clarence Pl in Idaho Falls, provides janitorial programs for offices, retail, and commercial sites across Eastern Idaho and Utah.",
    directAnswer:
      "Janitorial services are recurring commercial cleaning programs that cover daily or scheduled tasks such as restroom sanitation, trash removal, vacuuming, hard-floor maintenance, and high-touch disinfection. Imperial Cleaning builds scope from a walkthrough, confirms crew access requirements, and holds missed restrooms or inconsistent floors to checklist and supervisor inspection standards.",
    services: [
      { title: "Restroom Sanitation & Restocking", description: "Toilets, urinals, sinks, mirrors, and floors cleaned to a defined frequency with supply restocking so a missed restroom does not carry into the next business day." },
      { title: "Trash & Recycling Removal", description: "Office, break room, and common-area waste emptied on schedule with liners replaced and bins reset before staff arrive." },
      { title: "Hard Floor & Carpet Maintenance", description: "Dust mopping, vacuuming, and auto-scrub paths matched to traffic so entryways and corridors do not dull between periodic floor care projects." },
      { title: "High-Touch Disinfection", description: "Door handles, light switches, break room surfaces, and shared equipment on a documented schedule to reduce cross-contamination between zones." },
      { title: "Break Room & Kitchenette Cleaning", description: "Counters, sinks, appliance fronts, and tables cleaned so food prep areas pass a morning walk-through, not just a quick wipe." },
      { title: "After-Hours & Weekend Scheduling", description: "Service timed around your operating hours so cleaning crews do not interrupt tenants, patients, or production shifts." },
    ],
    whyUs: [
      { title: "Scope Built From Walkthroughs", description: "We document square footage, restroom count, floor types, and frequency before quoting so scope creep and missed areas are caught upfront, not after turnover." },
      { title: "Clear Access Requirements", description: "Access and onboarding requirements are reviewed before work begins. Supervisors spot-check restrooms, trash lines, and floor edges where shortcuts show up first." },
      { title: "Insured & Bonded", description: "General liability, workers' compensation, and bonding with certificates available for property managers and facility directors." },
    ],
    faqs: [
      {
        question: "What is included in janitorial services vs. a one-time clean?",
        answer: "Janitorial service is recurring upkeep on a defined schedule: restrooms, trash, floors, and touchpoints every visit. One-time cleans handle move-in, event, or project work. Most commercial clients use janitorial for daily or weekly maintenance.",
      },
      {
        question: "How often should a commercial building be cleaned?",
        answer: "Frequency depends on headcount, restrooms, and traffic. Many offices use three to five nights per week; lighter-use sites may use two to three. We recommend a walkthrough to match frequency to failure points like restrooms and break rooms.",
      },
      {
        question: "Do you serve cities outside Idaho Falls?",
        answer: "Yes. We cover 24 cities across Idaho and Utah from our Idaho Falls headquarters, with Eastern Idaho as our core market and regular routes into Utah corridors.",
      },
      {
        question: "How do you price janitorial contracts?",
        answer: "Pricing is a monthly contract based on square footage, cleaning frequency, restroom count, and floor type. We provide a written, scope-based quote after a site walkthrough. Call (208) 520-3202 to schedule.",
      },
    ],
    keywords:
      "janitorial services Idaho Falls, commercial janitorial Eastern Idaho, janitorial cleaning Utah, recurring office cleaning, facility janitorial Idaho",
    parentName: "Commercial Cleaning",
    parentHref: "/commercial-cleaning",
    ctaLabel: "Request a walkthrough",
    ctaHeading: "Request a Janitorial walkthrough",
    serviceLine: "commercial-cleaning",
  },
  {
    slug: "office-cleaning",
    name: "Office Cleaning",
    metaTitle: "Office Cleaning Services Idaho & Utah | Imperial Cleaning",
    metaDescription:
      "Professional office cleaning for Idaho Falls and Utah workspaces. Conference rooms, desks, and restrooms on reliable schedules. Call (208) 520-3202 for a quote.",
    h1: "Office Cleaning Services in Idaho Falls and Utah",
    intro:
      "Office cleaning targets the spaces employees and clients see every day: workstations, conference rooms, glass, and restrooms that fail fast when a crew skips detail work. Imperial Cleaning provides office cleaning from our Idaho Falls HQ for professional workspaces across Eastern Idaho and Utah.",
    directAnswer:
      "Office cleaning services cover private offices, open workstations, conference rooms, break areas, restrooms, and entry glass on a recurring schedule, usually after business hours. Imperial Cleaning scopes trash, vacuuming, disinfection of high-touch surfaces, and restroom standards from a walkthrough so missed conference rooms or streaked glass do not become the norm.",
    services: [
      { title: "Workstation & Desk Surrounding Cleaning", description: "Vacuuming, dusting reachable surfaces, and emptying waste without disturbing personal items or locked drawers." },
      { title: "Conference Room Turnover", description: "Tables, chairs, whiteboards, and AV touchpoints reset nightly so the first meeting of the day starts clean." },
      { title: "Restroom & Locker Room Upkeep", description: "Disinfection, restocking, and floor care at a frequency matched to employee headcount." },
      { title: "Break Room & Coffee Station Cleaning", description: "Counters, sinks, microwaves, and refrigerator fronts wiped down so odor and grime do not build between deep cleans." },
      { title: "Interior Glass & Entry Presentation", description: "Partition glass, sidelights, and lobby surfaces kept streak-free for client-facing first impressions." },
      { title: "Flexible After-Hours Access", description: "Cleaning scheduled when desks are clear, with key and alarm procedures documented to avoid lockout delays." },
    ],
    whyUs: [
      { title: "Office-Specific Checklists", description: "We separate open office, executive suite, and client-facing zones so conference rooms and lobbies get the same attention as back-office areas." },
      { title: "Crew Continuity Matters", description: "We assign consistent teams to reduce missed rooms caused by unfamiliar layouts and reduce the security friction of rotating strangers." },
      { title: "Written, Scope-Based Quotes", description: "After a walkthrough you receive a documented scope and price, not a verbal estimate that changes when restrooms or square footage were undercounted." },
    ],
    faqs: [
      {
        question: "Do you clean open-plan offices and cubicle areas?",
        answer: "Yes. We vacuum carpet and hard paths, empty waste, and dust reachable surfaces in open offices and cubicle banks. Locked drawers and personal items stay untouched unless your scope includes desk cleaning.",
      },
      {
        question: "Can office cleaning happen after 5 p.m.?",
        answer: "Yes. Most office clients prefer evening or early-morning service. We coordinate access, alarms, and elevator restrictions with your building manager.",
      },
      {
        question: "How is office cleaning different from general janitorial?",
        answer: "Office cleaning emphasizes workstations, conference rooms, interior glass, and break areas typical of professional environments. Janitorial is the broader recurring category; office scope is tuned to desk density and client-facing spaces.",
      },
      {
        question: "What affects office cleaning cost?",
        answer: "Square footage, desk count, restroom number, frequency, and floor type drive monthly pricing. We provide planning estimates after a walkthrough, not a quote from square footage alone. Call (208) 520-3202.",
      },
    ],
    keywords:
      "office cleaning Idaho Falls, office cleaning services Utah, commercial office janitorial, conference room cleaning Eastern Idaho, professional office cleaning",
    parentName: "Commercial Cleaning",
    parentHref: "/commercial-cleaning",
    ctaLabel: "Request a walkthrough",
    ctaHeading: "Request an Office Cleaning walkthrough",
    serviceLine: "commercial-cleaning",
  },
  {
    slug: "commercial-floor-care",
    name: "Commercial Floor Care",
    metaTitle: "Commercial Floor Care Idaho Falls | Imperial Cleaning Inc",
    metaDescription:
      "Strip, wax, burnish, and auto-scrub programs for Idaho and Utah commercial floors. Prevent finish failure and slip issues. Call (208) 520-3202 for a walkthrough.",
    h1: "Commercial Floor Care for Hard Surfaces in Idaho and Utah",
    intro:
      "Commercial floors fail in predictable ways: finish wear in main aisles, black heel marks at entries, and grit that dulls VCT before the next strip-and-wax cycle. Imperial Cleaning provides floor care programs for VCT, polished concrete, and tile across Idaho Falls, Eastern Idaho, and Utah.",
    directAnswer:
      "Commercial floor care includes daily maintenance such as dust mopping and auto-scrubbing plus periodic strip-and-wax, burnishing, and deep scrub programs for VCT, tile, and polished concrete. Imperial Cleaning maps traffic lanes during a walkthrough so finish failure in entries and elevator lobbies is addressed before tenants complain about dull or slippery floors.",
    services: [
      { title: "Auto-Scrub & Daily Hard-Floor Maintenance", description: "Scheduled scrubbing for corridors and lobbies so soil does not embed in finish between periodic restoration work." },
      { title: "Strip, Wax & Finish Restoration", description: "Full removal of worn finish, edge work, and multiple coats applied with dry times respected so new finish does not peel prematurely." },
      { title: "Burnishing & High-Speed Polishing", description: "Burnish programs for VCT and polished concrete to restore gloss in retail, showroom, and healthcare corridors." },
      { title: "Entry Matting & Grit Control Plans", description: "Mat placement and maintenance guidance to reduce the sand and salt that destroys finish at exterior doors." },
      { title: "Tile & Grout Deep Cleaning", description: "Machine scrubbing and detail work for quarry tile, ceramic, and grout lines in kitchens, restrooms, and back-of-house areas." },
      { title: "Floor Care Scheduling Around Operations", description: "Project windows planned for nights or weekends so wet floors and equipment do not conflict with business hours." },
    ],
    whyUs: [
      { title: "Traffic-Lane Inspection Focus", description: "We document main paths, pivot points, and entry zones where finish wears first, not just total square footage." },
      { title: "Correct Products for Each Surface", description: "Finish, pad, and chemical selection matched to VCT, LVT, polished concrete, or tile so incompatible chemistry does not cloud or strip floors." },
      { title: "Insured Floor Care", description: "Commercial equipment operated by trained staff with liability coverage for work in occupied buildings." },
    ],
    faqs: [
      {
        question: "How often should VCT floors be stripped and waxed?",
        answer: "Most high-traffic VCT needs strip-and-wax one to two times per year, with interim burnishing or scrub-and-recoat in between. Low-traffic offices may go longer. We assess finish wear at entries and elevator lobbies during the walkthrough.",
      },
      {
        question: "Do you handle polished concrete maintenance?",
        answer: "Yes. We maintain polished concrete with appropriate scrub, burnish, and periodic refinement programs. Heavy restoration or grinding is scoped separately based on current condition.",
      },
      {
        question: "Can floor care happen without shutting down the building?",
        answer: "Daily auto-scrub and burnish work is usually zoned by section. Full strip-and-wax typically requires after-hours or weekend access so wet floors and fumes do not affect tenants.",
      },
      {
        question: "What causes floor finish to fail early?",
        answer: "Embedded grit, wrong chemicals, insufficient dry time, and skipped edge work are common causes. We address traffic lanes, matting, and product compatibility during planning to extend finish life.",
      },
    ],
    keywords:
      "commercial floor care Idaho Falls, strip and wax Utah, VCT floor maintenance, burnishing services Eastern Idaho, hard floor cleaning commercial",
    parentName: "Commercial Cleaning",
    parentHref: "/commercial-cleaning",
    ctaLabel: "Request a walkthrough",
    ctaHeading: "Request a Floor Care walkthrough",
    serviceLine: "commercial-cleaning",
  },
  {
    slug: "day-porter-services",
    name: "Day Porter Services",
    metaTitle: "Day Porter Services Idaho & Utah | Imperial Cleaning Inc",
    metaDescription:
      "Day porter services for Idaho Falls and Utah buildings. Daytime restrooms, spills, and lobby upkeep between nightly cleans. Call (208) 520-3202 to plan coverage.",
    h1: "Day Porter Services for Busy Idaho and Utah Buildings",
    intro:
      "When tenants occupy a building all day, nightly cleaning alone leaves restrooms, lobbies, and spills unattended for hours. Imperial Cleaning provides day porter services from Idaho Falls for multi-tenant offices, medical buildings, and retail centers across Eastern Idaho and Utah.",
    directAnswer:
      "Day porter services place a cleaner on site during business hours to handle restrooms, spills, trash overflow, lobby touch-ups, and quick response tasks between deeper nightly or weekly janitorial visits. Imperial Cleaning defines response times, supply restocking, and inspection rounds so missed restrooms during peak lunch hours do not fall to front-desk staff.",
    services: [
      { title: "Mid-Day Restroom Checks", description: "Restrooms inspected and refreshed on a loop during peak hours so paper, soap, and floor condition stay acceptable between full nightly cleans." },
      { title: "Spill & Incident Response", description: "Quick cleanup of leaks, tracked-in weather, and cafeteria spills before they become slip hazards or permanent stains." },
      { title: "Lobby & Elevator Landing Upkeep", description: "Glass smudges, trash, and visible soil addressed during the day when client traffic is highest." },
      { title: "Conference Room Reset", description: "Same-day turnover for meeting rooms after large sessions without waiting for the night crew." },
      { title: "Trash Overflow & Common Area Monitoring", description: "Patrol of break areas and shared kitchens so bins do not sit full through the afternoon." },
      { title: "Tenant Communication Log", description: "Simple reporting of issues found during rounds so property management sees patterns, not just one-off complaints." },
    ],
    whyUs: [
      { title: "Defined Patrol Routes", description: "We map restroom locations, elevator banks, and high-traffic zones so porters hit the same inspection points every hour, not random wandering." },
      { title: "Daytime-Trained Staff", description: "Porters work around occupants, elevators, and security protocols. Access and conduct requirements are agreed with your building contact." },
      { title: "Pairs With Nightly Janitorial", description: "Day porter scope complements, not replaces, deep nightly cleaning so budgets align with actual failure modes during occupied hours." },
    ],
    faqs: [
      {
        question: "What is the difference between a day porter and nightly janitorial?",
        answer: "Day porters handle daytime touch-ups, restroom checks, spills, and visibility issues while the building is occupied. Nightly janitorial covers full scope: floors, trash, detailed restrooms, and larger tasks after hours.",
      },
      {
        question: "How many hours per day does a day porter work?",
        answer: "Most buildings start with four to eight hours on peak days, often aligned with lunch and afternoon traffic. We adjust coverage after reviewing restroom counts and tenant complaints.",
      },
      {
        question: "Do day porters carry supplies on a cart?",
        answer: "Yes. Porters carry restroom supplies, spill kits, and basic tools for lobby and conference touch-ups. Larger floor equipment stays with nightly or project crews.",
      },
      {
        question: "Can day porter service cover multiple floors?",
        answer: "Yes. Routes are timed by floor and restroom bank. High-rise buildings may need more than one porter or staggered shifts depending on elevator access and tenant density.",
      },
    ],
    keywords:
      "day porter services Idaho Falls, daytime cleaning Utah, building porter Eastern Idaho, restroom attendant commercial, lobby upkeep day shift",
    parentName: "Commercial Cleaning",
    parentHref: "/commercial-cleaning",
    ctaLabel: "Request a walkthrough",
    ctaHeading: "Request a Day Porter walkthrough",
    serviceLine: "commercial-cleaning",
  },
  {
    slug: "industrial-cleaning",
    name: "Industrial Cleaning",
    metaTitle: "Industrial Cleaning Idaho Falls & Utah | Imperial Cleaning",
    metaDescription:
      "Industrial cleaning for plants and production areas in Idaho and Utah. Safety-aware crews for floors, restrooms, and offices. Call (208) 520-3202 for a scope review.",
    h1: "Industrial Cleaning for Idaho and Utah Production Sites",
    intro:
      "Industrial sites combine production floors, forklift traffic, oil and dust, and office zones that each need different methods and safety rules. Imperial Cleaning, based in Idaho Falls since 2015, provides industrial cleaning for manufacturing and processing facilities across Eastern Idaho and Utah.",
    directAnswer:
      "Industrial cleaning covers production-adjacent floors, break areas, restrooms, office zones, and designated non-production spaces in plants and processing facilities, with scope separated from specialized equipment or hazmat work. Imperial Cleaning documents PPE requirements, lockout awareness, and traffic patterns during a walkthrough so crews do not enter restricted areas or miss the dust that returns an hour after a quick sweep.",
    services: [
      { title: "Production Floor Dust & Debris Control", description: "Scheduled sweeping and scrubbing in approved zones to reduce dust tracking into offices and finished goods areas." },
      { title: "Break Room & Locker Room Sanitation", description: "Employee welfare spaces cleaned to a standard that stands up to shift changes and heavy daily use." },
      { title: "Restroom & Shower Facility Cleaning", description: "High-frequency disinfection and restocking for industrial restroom banks that fail quickly on single-shift schedules." },
      { title: "Office & Control Room Cleaning", description: "Administrative areas kept separate from shop dust with dedicated tools and entry protocols." },
      { title: "Warehouse-Adjacent Aisle Maintenance", description: "Marked aisle and staging floor care where forklifts and foot traffic overlap, scoped to safety markings and clear paths." },
      { title: "Weekend & Shutdown Window Projects", description: "Deep cleans scheduled during planned downtime so hoses, scrubbers, and dry time do not interrupt production." },
    ],
    whyUs: [
      { title: "Safety-First Site Orientation", description: "Crews review your site rules, PPE, and restricted zones before the first service. We do not send a standard office team into a plant without orientation." },
      { title: "Separate Tools by Zone", description: "Color-coded or segregated equipment reduces cross-contamination between restroom, office, and production-adjacent areas." },
      { title: "Insured for Commercial Industrial Work", description: "Licensed, insured, and bonded with certificates for facility and safety managers." },
    ],
    faqs: [
      {
        question: "Do you clean inside production lines or machinery?",
        answer: "We clean floors and surfaces in approved non-operational zones and employee areas. Specialized equipment degreasing, confined space, or hazmat work is referred to appropriate specialists or scoped separately with your safety team.",
      },
      {
        question: "Can industrial cleaning run during operating shifts?",
        answer: "Light upkeep in break rooms and restrooms can run on shift. Floor scrubbing and project work usually happens off-shift or during shutdowns to keep forklifts and pedestrians separated from wet floors.",
      },
      {
        question: "What PPE do your crews use on industrial sites?",
        answer: "We follow your site requirements: steel toes, vests, eye protection, and hearing protection as specified. Tell us your rules during the walkthrough and we build them into the work plan.",
      },
      {
        question: "How is industrial cleaning scoped differently from warehouse cleaning?",
        answer: "Industrial scope often includes plant break areas, locker rooms, and production-adjacent dust control with safety orientation. Warehouse scope emphasizes aisle clearances, dock areas, and large square footage with less employee welfare complexity.",
      },
    ],
    keywords:
      "industrial cleaning Idaho Falls, plant cleaning Utah, manufacturing facility janitorial, production floor cleaning Eastern Idaho, industrial janitorial services",
    parentName: "Commercial Cleaning",
    parentHref: "/commercial-cleaning",
    ctaLabel: "Request a walkthrough",
    ctaHeading: "Request an Industrial Cleaning walkthrough",
    serviceLine: "commercial-cleaning",
  },
  {
    slug: "warehouse-cleaning",
    name: "Warehouse Cleaning",
    metaTitle: "Warehouse Cleaning Services Idaho & Utah | Imperial Cleaning",
    metaDescription:
      "Warehouse cleaning for docks, aisles, and offices in Idaho Falls and Utah. Reduce dust, slips, and inspection failures. Call (208) 520-3202 for a site walk.",
    h1: "Warehouse Cleaning Services Across Idaho and Utah",
    intro:
      "Warehouses accumulate dust from constant forklift traffic, dock debris, and neglected office corners that never see a nightly crew. Imperial Cleaning provides warehouse cleaning from Idaho Falls for distribution and fulfillment centers across Eastern Idaho and Utah.",
    directAnswer:
      "Warehouse cleaning services focus on aisle floors, loading docks, staging areas, racking-adjacent debris, and attached office or break spaces on schedules that work around pick paths and shift changes. Imperial Cleaning scopes square footage by zone, not a single blended rate, so dock grit and office restrooms both land on the checklist instead of getting skipped when a crew runs out of time.",
    services: [
      { title: "Aisle & Staging Floor Scrubbing", description: "Auto-scrub or sweep-scrub programs for marked aisles and pick zones without blocking active forklift routes." },
      { title: "Loading Dock & Pit Cleaning", description: "Debris, leaf buildup, and tracked-in material removed from docks and aprons to reduce slip and pest issues." },
      { title: "Office & Break Room Upkeep", description: "Attached admin spaces cleaned on the same contract so warehouse managers are not scheduling a second vendor." },
      { title: "Restroom & Employee Area Sanitation", description: "Restrooms that see shift-change volume cleaned and restocked on a realistic frequency." },
      { title: "Dust Control for High-Bay Areas", description: "High-reach dusting and blowing plans scoped safely around racking, sprinklers, and inventory clearance requirements." },
      { title: "Weekend Deep-Clean Windows", description: "Planned shutdown or low-volume periods for full-floor scrubbing when daily upkeep is not enough." },
    ],
    whyUs: [
      { title: "Zone-Based Scoping", description: "Docks, aisles, offices, and restrooms are priced and scheduled separately so the dock does not get ignored when the office looks fine." },
      { title: "Forklift-Aware Scheduling", description: "We coordinate with shift supervisors so scrubbers and extractors run when aisles can be sectioned off safely." },
      { title: "Warehouse Access Planning", description: "Confirm inventory restrictions, badge requirements and dock access rules before service begins." },
    ],
    faqs: [
      {
        question: "Can you clean while picking and shipping continue?",
        answer: "Light trash and restroom service can run on shift. Floor scrubbing is usually zoned by aisle during low-traffic periods or on weekends. We plan with your operations lead so pick paths stay clear.",
      },
      {
        question: "Do you remove pallet debris and shrink wrap?",
        answer: "Yes, when included in scope. Dock and staging cleanup covers typical debris. Haul-away of large waste streams or hazardous material is quoted separately.",
      },
      {
        question: "How often should warehouse floors be scrubbed?",
        answer: "High-traffic fulfillment centers often need weekly or biweekly aisle scrubbing plus daily sweep in docks. Storage-heavy sites may go longer. We recommend a walkthrough to match frequency to dust and slip risk.",
      },
      {
        question: "Do you clean cold storage or food-grade warehouses?",
        answer: "We clean office, dock, and dry warehouse zones. Temperature-controlled or food-grade environments may need additional protocol review during scoping. Call (208) 520-3202 to discuss your facility.",
      },
    ],
    keywords:
      "warehouse cleaning Idaho Falls, distribution center cleaning Utah, dock cleaning services, warehouse floor scrubbing Eastern Idaho, fulfillment center janitorial",
    parentName: "Commercial Cleaning",
    parentHref: "/commercial-cleaning",
    ctaLabel: "Request a walkthrough",
    ctaHeading: "Request a Warehouse Cleaning walkthrough",
    serviceLine: "commercial-cleaning",
  },
  {
    slug: "property-management-cleaning",
    name: "Property Management Cleaning",
    metaTitle: "Property Management Cleaning Idaho | Imperial Cleaning Inc",
    metaDescription:
      "Multi-site cleaning for property managers in Idaho Falls, Eastern Idaho, and Utah. Common areas, turnovers, and vendor coordination. Call (208) 520-3202.",
    h1: "Property Management Cleaning for Multi-Site Portfolios",
    intro:
      "Property managers juggle tenant complaints, vendor gaps, and common areas that show wear before a lease renewal. Imperial Cleaning supports property management companies with recurring common-area cleaning and turnover support from our Idaho Falls headquarters across Idaho and Utah.",
    directAnswer:
      "Property management cleaning covers lobbies, corridors, restrooms, amenity spaces, parking structures where scoped, and turnover cleans between tenants, often across multiple addresses under one vendor relationship. Imperial Cleaning provides written scopes per site, consistent inspection checklists, and certificates of insurance so managers are not re-explaining restroom standards after every crew change.",
    services: [
      { title: "Common Area & Lobby Maintenance", description: "Entries, elevators, corridors, and amenity lobbies cleaned to a standard tenants notice when it slips." },
      { title: "Restroom Banks & Fitness Centers", description: "High-use shared restrooms and gym spaces on frequencies that match tenant counts, not a one-size template." },
      { title: "Tenant Turnover & Vacancy Cleans", description: "Suite cleanout after move-out so units are show-ready without delaying re-leasing." },
      { title: "Garage & Exterior-Adjacent Sweeping", description: "Parking and sidewalk zones scoped where property standards require debris control and slip reduction." },
      { title: "Multi-Site Scheduling & Reporting", description: "One coordinator for portfolios across Eastern Idaho and Utah instead of a different vendor per city." },
      { title: "Day Porter Add-On for Occupied Buildings", description: "Mid-day restroom and lobby coverage when nightly service alone generates tenant tickets." },
    ],
    whyUs: [
      { title: "Portfolio-Level Coordination", description: "We map sites across 24 cities in Idaho and Utah with one point of contact for scope changes, COI updates, and complaint response." },
      { title: "Documented Inspection Standards", description: "Checklists and supervisor visits reduce the back-and-forth when a tenant photos a missed restroom at 2 p.m." },
      { title: "Insured & Bonded", description: "Certificates for ownership groups and lenders delivered on request." },
    ],
    faqs: [
      {
        question: "Can one contract cover multiple buildings in different cities?",
        answer: "Yes. We serve property managers with sites across Idaho and Utah from Idaho Falls. Each address gets its own scope and schedule under a master agreement when helpful.",
      },
      {
        question: "Do you handle tenant improvement cleanup?",
        answer: "We scope post-TI cleaning and common-area protection based on building rules. Heavy construction debris may align with our construction cleaning line and is quoted separately.",
      },
      {
        question: "How fast can you respond to a tenant complaint clean?",
        answer: "Day porter clients get same-day touch-ups within defined hours. Non-porter accounts schedule corrective visits as soon as crew routing allows. We do not promise same-day service everywhere without a walkthrough.",
      },
      {
        question: "What do you need from property managers to start?",
        answer: "Site list, square footage, common-area plans, access procedures, and insurance requirements. We walk representative sites and deliver written, scope-based quotes.",
      },
    ],
    keywords:
      "property management cleaning Idaho Falls, multi-site janitorial Utah, common area cleaning, tenant turnover cleaning Eastern Idaho, commercial property janitorial",
    parentName: "Commercial Cleaning",
    parentHref: "/commercial-cleaning",
    ctaLabel: "Request a walkthrough",
    ctaHeading: "Request a Property Management walkthrough",
    serviceLine: "commercial-cleaning",
  },
  {
    slug: "office-building-cleaning",
    name: "Office Building Cleaning",
    metaTitle: "Office Building Cleaning Idaho Falls | Imperial Cleaning Inc",
    metaDescription:
      "Office building cleaning for multi-tenant towers and campuses in Idaho and Utah. Lobbies, floors, and restrooms at scale. Call (208) 520-3202 for a building walk.",
    h1: "Office Building Cleaning for Multi-Tenant Properties",
    intro:
      "Office buildings add elevator banks, garage entries, multi-floor restrooms, and landlord standards that a single-suite office scope does not cover. Imperial Cleaning cleans office buildings from Idaho Falls for landlords and building engineers across Eastern Idaho and Utah.",
    directAnswer:
      "Office building cleaning includes lobby and elevator landings, garage-adjacent entries, multi-floor restrooms, corridor hard floors and carpet, tenant suite janitorial where contracted, and glass at scale. Imperial Cleaning aligns frequency with occupancy and inspects elevator lobbies and restroom cores first, because those are the failure points tenants photograph when service slips.",
    services: [
      { title: "Lobby & Elevator Landing Programs", description: "Floor care, glass, and furniture zones maintained at the standard the first floor sets for the whole tower." },
      { title: "Multi-Floor Restroom Core Cleaning", description: "Restroom banks on each level restocked and disinfected on loops matched to tenant headcount." },
      { title: "Garage & Loading Dock Entries", description: "Grit control at paths from parking into lobby carpet and hard surfaces." },
      { title: "Corridor Hard Floor & Carpet Care", description: "Vacuum, mop, and auto-scrub programs for long runs of common corridor." },
      { title: "Tenant Suite Janitorial (Optional)", description: "Per-floor or per-suite recurring cleaning under the same vendor for simpler landlord reporting." },
      { title: "Day Porter for Peak-Hour Buildings", description: "Mid-day restroom and lobby coverage when occupancy exceeds what nightly service can hold." },
    ],
    whyUs: [
      { title: "Building Engineer Collaboration", description: "We work from your stack of standards and inspection rounds, not a generic checklist written for a small office." },
      { title: "Equipment for Large Footprint", description: "Auto-scrubbers, extractors, and high-reach tools sized for corridors and lobbies, not just suite interiors." },
      { title: "Consistent Crews Reduce Turnover Risk", description: "Stable teams learn card access, elevator rules, and tenant sensitivities so a new cleaner does not trigger security incidents." },
    ],
    faqs: [
      {
        question: "Do you clean both common areas and tenant suites?",
        answer: "Yes. Landlords often hire us for common areas while tenants contract suite cleaning separately. We can combine both under coordinated schedules when the ownership group prefers one vendor.",
      },
      {
        question: "How do you handle multi-tenant access and badges?",
        answer: "We document badge issuance, after-hours access, and elevator restrictions during onboarding. Confirm staff onboarding and access requirements before service begins.",
      },
      {
        question: "Can you service high-rise restrooms on a tight loop?",
        answer: "Yes. Restroom routes are timed by floor cluster. Day porter coverage adds mid-day checks when a nightly clean cannot survive lunch volume on every level.",
      },
      {
        question: "What is different from standard office cleaning?",
        answer: "Office building work emphasizes shared vertical circulation, multi-floor restrooms, garage entries, and landlord reporting. Single-suite office cleaning focuses on one tenant footprint.",
      },
    ],
    keywords:
      "office building cleaning Idaho Falls, multi-tenant janitorial Utah, commercial tower cleaning, elevator lobby cleaning Eastern Idaho, building janitorial services",
    parentName: "Commercial Cleaning",
    parentHref: "/commercial-cleaning",
    ctaLabel: "Request a walkthrough",
    ctaHeading: "Request an Office Building walkthrough",
    serviceLine: "commercial-cleaning",
  },
  {
    slug: "manufacturing-facility-cleaning",
    name: "Manufacturing Facility Cleaning",
    metaTitle: "Manufacturing Facility Cleaning Idaho | Imperial Cleaning",
    metaDescription:
      "Manufacturing facility cleaning in Idaho Falls and Utah. Plant restrooms, break areas, and approved floor zones. Call (208) 520-3202 for a scope review.",
    h1: "Manufacturing Facility Cleaning in Idaho and Utah",
    intro:
      "Manufacturing facilities need cleaning that respects production schedules, QA areas, and employee welfare spaces without treating the plant like a generic office. Imperial Cleaning provides manufacturing facility cleaning from Idaho Falls for fabricators, food-adjacent processors, and assembly plants across Eastern Idaho and Utah.",
    directAnswer:
      "Manufacturing facility cleaning targets employee welfare areas, administrative offices, approved non-production floors, and designated cleanup zones while excluding specialized machine degreasing or regulated processes unless separately scoped. Imperial Cleaning maps shift patterns and restricted areas during a walkthrough so dust from production does not reappear in break rooms an hour after service.",
    services: [
      { title: "Break Room & Cafeteria Cleaning", description: "Food-contact adjacent surfaces and floors cleaned on schedules that survive three-shift use." },
      { title: "Locker Room & Shower Maintenance", description: "Sanitation and restocking for facilities where shift-change volume overwhelms a once-daily pass." },
      { title: "Production-Adjacent Floor Care", description: "Sweep and scrub in approved zones with signage and barriers coordinated with your safety lead." },
      { title: "QA & Lab-Adjacent Support Areas", description: "Office and corridor cleaning near sensitive areas using segregated tools and your contamination rules." },
      { title: "Administrative & Front Office Cleaning", description: "Client-facing and front desk zones kept free of shop dust with dedicated entry protocols." },
      { title: "Shutdown & Weekend Deep Cleans", description: "Project work during planned downtime for floors and welfare spaces that daily scope cannot fully reset." },
    ],
    whyUs: [
      { title: "Plant Orientation Before Day One", description: "Crews learn your PPE, escort rules, and no-go zones. We do not assume a manufacturing floor is the same as a warehouse aisle." },
      { title: "Shift-Aware Scheduling", description: "Service timed around shift change and production peaks so wet floors and hoses are not competing with forklifts." },
      { title: "Plant Access Planning", description: "Review badge, inventory and visitor policies before assigning the service schedule." },
    ],
    faqs: [
      {
        question: "Do you clean production equipment or machine bases?",
        answer: "General cleaning stops at approved floor and surface boundaries. Equipment degreasing, confined space, or chemical handling is referred to specialists or scoped with your maintenance team.",
      },
      {
        question: "Can you support food or beverage manufacturing?",
        answer: "We clean welfare and office zones and approved non-production areas. Food-grade production lines may require additional protocol review. Discuss your SQF or internal standards during the walkthrough.",
      },
      {
        question: "How is manufacturing facility cleaning different from industrial cleaning?",
        answer: "The terms overlap. We use manufacturing facility cleaning for plant-specific welfare, QA-adjacent, and shift-oriented scope. Industrial cleaning covers a broader range of processing and heavy sites with similar safety orientation.",
      },
      {
        question: "What do you inspect first on a plant walkthrough?",
        answer: "Break rooms, restrooms, shift-change routes, and production-adjacent floors where dust returns fastest. Those drive frequency and crew size more than front office square footage alone.",
      },
    ],
    keywords:
      "manufacturing facility cleaning Idaho Falls, plant janitorial Utah, factory cleaning services, production facility cleaning Eastern Idaho, assembly plant cleaning",
    parentName: "Commercial Cleaning",
    parentHref: "/commercial-cleaning",
    ctaLabel: "Request a walkthrough",
    ctaHeading: "Request a Manufacturing Facility walkthrough",
    serviceLine: "commercial-cleaning",
  },
  {
    slug: "commercial-cleaning-cost",
    name: "Commercial Cleaning Cost",
    metaTitle: "Commercial Cleaning Cost Guide Idaho | Imperial Cleaning",
    metaDescription:
      "Scope factors for commercial cleaning cost in Idaho and Utah. Monthly contracts depend on scope, not guesses. Request a written, scope-based quote. Call (208) 520-3202.",
    h1: "Commercial Cleaning Cost: What Idaho and Utah Facilities Should Plan For",
    intro:
      "Commercial cleaning cost depends on square footage, frequency, restrooms, floor types, and whether you need day porter coverage or periodic floor projects. Imperial Cleaning, headquartered in Idaho Falls, provides written, scope-based quotes after a walkthrough across Idaho and Utah. Review the factors below, then request a written scope and price.",
    directAnswer:
      "Recurring commercial cleaning is quoted around the agreed tasks, cleanable area, visit frequency, restroom use, floor type and periodic projects. Request a walkthrough-based written quote; a generic square-foot rate is not a reliable project price.",
    services: [
      { title: "Scope Variables We Document", description: "Square footage by zone, restroom count, break rooms, floor material, trash volume, and access restrictions captured on site, not over the phone." },
      { title: "Frequency & Failure-Point Review", description: "We match nights per week to restrooms and traffic so you are not underbuying service that fails at lunch or overpaying for unused areas." },
      { title: "Floor Care Project Planning", description: "Strip-and-wax, carpet extraction, and scrub projects quoted separately from recurring janitorial so finish work is not hidden in a low monthly rate." },
      { title: "Day Porter Add-On Pricing", description: "Hourly or fixed daily blocks priced against patrol routes, not bundled into nightly service without acknowledgment." },
      { title: "Multi-Site Portfolio Discounts", description: "Property managers with several addresses may receive coordinated pricing after representative site walks." },
      { title: "Written, Scope-Based Quotes", description: "After walkthrough you receive documented scope and price, not a verbal range that changes when restrooms were missed in the estimate." },
    ],
    whyUs: [
      { title: "Walkthrough-First Pricing", description: "We do not publish fake precision. Every facility gets a site review before numbers are binding." },
      { title: "Transparent Scope Lines", description: "Recurring, porter, and project work are separated so you see what drives the monthly number." },
      { title: "Insured & Bonded Since 2015", description: "Imperial Cleaning has served Idaho and Utah from Idaho Falls with documented insurance for facility managers." },
    ],
    faqs: [
      {
        question: "What is a typical commercial cleaning cost per square foot?",
        answer: "A square-foot figure alone does not capture restroom use, access or cleaning frequency. Ask for the included tasks, visit schedule, periodic work and exclusions alongside the price.",
      },
      {
        question: "How does post-construction cleaning cost compare?",
        answer: "Post-construction cleaning is quoted by the agreed phase, area, debris and surface condition, access and timing. Request a project scope rather than applying a generic published range.",
      },
      {
        question: "Why do two bids for the same building differ so much?",
        answer: "Different frequencies, restroom counts, floor projects included or excluded, and porter hours change the monthly total. Compare scopes line by line, not just the bottom number.",
      },
      {
        question: "How do I get an exact commercial cleaning quote?",
        answer: "Schedule a walkthrough at your facility. We deliver a written, scope-based quote. Call (208) 520-3202 or request a visit online.",
      },
    ],
    keywords:
      "commercial cleaning cost Idaho Falls, office cleaning prices Utah, janitorial cost Eastern Idaho, commercial cleaning rates, facility cleaning budget Idaho",
    parentName: "Commercial Cleaning",
    parentHref: "/commercial-cleaning",
    ctaLabel: "Get Exact Quote",
    ctaHeading: "Get an Exact Commercial Cleaning Quote",
    serviceLine: "commercial-cleaning",
  },
  {
    slug: "construction-cleaning/rough-clean",
    name: "Rough Clean",
    metaTitle: "Rough Clean Construction Cleaning Idaho | Imperial Cleaning",
    metaDescription:
      "Rough clean post-construction service in Idaho Falls and Utah. Remove debris and dust so finish trades can work. Call (208) 520-3202 for project pricing.",
    h1: "Rough Clean Construction Cleaning for Idaho and Utah Jobsites",
    intro:
      "Rough clean happens after framing, MEP rough-in, and drywall before trim, paint, and floor finishes can proceed without rework. Imperial Cleaning performs rough cleans for general contractors and builders across Idaho Falls, Eastern Idaho, and Utah.",
    directAnswer:
      "Rough construction cleaning removes bulk debris, drywall dust, labels, and jobsite trash so finishing trades have clear floors and breathable air in work areas. It is not turnover-ready cleaning. Imperial Cleaning scopes by phase, documents access and power, and schedules crews so drywall dust does not settle on newly installed trim because the rough pass was skipped or rushed.",
    services: [
      { title: "Bulk Debris & Scrap Removal", description: "Wood, packaging, drywall scraps, and trade waste bagged and removed from work areas per GC direction." },
      { title: "Drywall Dust Control Pass", description: "High-dust vacuum and wipe of surfaces that would contaminate paint, trim, or MEP trim-out if left coated." },
      { title: "Floor Sweep & Initial Scrape", description: "Subfloor and slab cleared of nails, mud, and chunks before floor coverings or coatings begin." },
      { title: "Window & Label Removal", description: "Protective film and sticker residue removed from glass and frames where trades need clear sightlines." },
      { title: "Restroom & Core Area Reset", description: "Temporary facilities and worker paths cleaned so inspections and subsequent trades are not blocked by prior-phase mess." },
      { title: "Phase Scheduling With GC Calendar", description: "Mobilization tied to rough-in completion dates, not arbitrary calendar slots that leave finish trades waiting." },
    ],
    whyUs: [
      { title: "GC Phase Alignment", description: "We understand rough clean is a gate before trim and paint. Missed dust here becomes callback cost for the GC later." },
      { title: "Construction-Trained Crews", description: "Teams expect incomplete power, incomplete HVAC, and active trades on adjacent phases." },
      { title: "Written Project Quotes", description: "Walkthrough-based pricing documented by square footage, debris level, and access constraints." },
    ],
    faqs: [
      {
        question: "When should rough clean happen on a commercial build?",
        answer: "After substantial rough-in and drywall hang/finish, before trim carpentry, paint, and floor finish trades mobilize. Timing is coordinated with your superintendent.",
      },
      {
        question: "Does rough clean include window washing?",
        answer: "Rough clean includes label and film removal and dust wipe, not final detail glass. Final and touch-up phases handle inspection-ready glass.",
      },
      {
        question: "How is rough clean priced?",
        answer: "Pricing depends on cleanable area, agreed debris removal, floor condition, access and the rough-clean scope. We confirm the price after reviewing the jobsite requirements.",
      },
      {
        question: "Do you haul off construction dumpsters?",
        answer: "We handle bagged debris and coordinated haul-off within scope. Dumpster rental and heavy demo removal are typically GC-supplied or quoted as add-ons.",
      },
    ],
    keywords:
      "rough clean construction Idaho Falls, post construction rough clean Utah, drywall dust cleanup, construction debris removal Eastern Idaho, GC rough cleaning",
    parentName: "Construction Cleaning",
    parentHref: "/construction-cleaning",
    ctaLabel: "Get Project Quote",
    ctaHeading: "Get a Rough Clean Project Quote",
    serviceLine: "construction-cleaning",
  },
  {
    slug: "construction-cleaning/final-clean",
    name: "Final Clean",
    metaTitle: "Final Clean Construction Services Utah & Idaho | Imperial",
    metaDescription:
      "Final clean for turnover and inspection in Idaho Falls and Utah. Detail dust, floors, and fixtures before CO. Call (208) 520-3202 to hold your target date.",
    h1: "Final Clean Construction Cleaning Before Turnover",
    intro:
      "Final clean is the detailed pass before certificate of occupancy, client walkthrough, or tenant move-in: every surface a inspector or owner will touch. Imperial Cleaning provides final cleans for commercial and multi-family projects across Idaho Falls, Eastern Idaho, and Utah.",
    directAnswer:
      "Final construction cleaning is the comprehensive detail phase after trades complete work: fine dust removal, fixture and appliance cleaning, floor finish protection removal, restroom and kitchen detail, and interior glass to turnover standard. Imperial Cleaning schedules final clean after punch-heavy trades are done so dust from late HVAC balancing or door hardware installs does not undo the first detailed pass.",
    services: [
      { title: "Fine Dust Detail Throughout", description: "High and low dusting, ledges, diffusers, and horizontal surfaces that fail white-glove or owner walkthroughs." },
      { title: "Floor Finish & Protection Removal", description: "Adhesive, film, and trade protection removed from VCT, tile, LVT, and sealed concrete without damaging new finish." },
      { title: "Restroom & Kitchen Fixture Detail", description: "Basins, fixtures, mirrors, and hardware polished to occupancy-ready condition." },
      { title: "Interior Glass & Partition Cleaning", description: "Streak-free glass and framing after construction film and label removal." },
      { title: "Cabinet, Millwork & Appliance Fronts", description: "Fingerprints, pencil marks, and dust removed from visible joinery before owner photos." },
      { title: "Trash & Staging Area Clear-Out", description: "Final bag-out of trade debris and protection materials so the site presents clean for inspection." },
    ],
    whyUs: [
      { title: "Turnover Inspection Mindset", description: "We clean to the points owners and municipal inspectors actually open: drawers, vents, glass, and restrooms." },
      { title: "Coordination With Punch List", description: "Final clean is sequenced after major trades complete. We communicate with supers when late work will require touch-up phase." },
      { title: "Insurance Documentation", description: "Certificates available for GC compliance and owner requirements." },
    ],
    faqs: [
      {
        question: "What is the difference between final clean and rough clean?",
        answer: "Rough clean removes bulk debris and heavy drywall dust so finish trades can work. Final clean is detailed turnover cleaning after finishes are installed, aimed at inspection and occupancy.",
      },
      {
        question: "Should final clean happen before or after punch list?",
        answer: "Final clean usually follows substantial completion of finishes and precedes or overlaps initial punch walk. Late trade return after final clean moves work to a touch-up phase.",
      },
      {
        question: "Do you clean exterior windows on final clean?",
        answer: "Interior glass is standard. Exterior window cleaning may be scoped separately based on access, height, and owner requirements.",
      },
      {
        question: "How far in advance should we book final clean?",
        answer: "Contact us when trim and floor finishes are scheduled for completion. Lead time varies by season and project size across Idaho and Utah. Call (208) 520-3202 to hold a target date.",
      },
    ],
    keywords:
      "final clean construction Idaho Falls, post construction final clean Utah, turnover cleaning commercial, CO cleaning services Eastern Idaho, builder final clean",
    parentName: "Construction Cleaning",
    parentHref: "/construction-cleaning",
    ctaLabel: "Get Project Quote",
    ctaHeading: "Get a Final Clean Project Quote",
    serviceLine: "construction-cleaning",
  },
  {
    slug: "construction-cleaning/touch-up-clean",
    name: "Touch-Up Clean",
    metaTitle: "Touch-Up Clean Post-Construction Idaho | Imperial Cleaning",
    metaDescription:
      "Touch-up construction cleaning after punch list in Idaho Falls and Utah. Reset dust and smudges before closeout. Call (208) 520-3202 to schedule a walkthrough.",
    h1: "Touch-Up Clean After Punch List and Late Trade Return",
    intro:
      "Touch-up clean closes the gap when electricians, HVAC balancers, and punch-list carpenters return after final clean and leave dust, boot marks, and fingerprints behind. Imperial Cleaning provides touch-up cleans for projects across Idaho Falls, Eastern Idaho, and Utah.",
    directAnswer:
      "Touch-up construction cleaning is a targeted reset after final clean when subsequent trades, punch-list work, or owner walkthroughs introduce new dust, marks, or debris. Scope is lighter than final clean but faster to mobilize. Imperial Cleaning focuses on affected rooms, vents, glass, and floors so closeout is not delayed waiting for a full final crew to remobilize.",
    services: [
      { title: "Post-Punch Dust Reset", description: "Affected rooms dusted and vacuumed after trim, hardware, or ceiling work disturbs settled dust." },
      { title: "Glass & Mirror Smudge Removal", description: "Interior glass and mirrors re-detailed where fingerprints and tape marks reappear during walkthroughs." },
      { title: "Floor Spot Clean & Protection Reset", description: "Tracked-in debris and localized scuffs addressed on new VCT, tile, or LVT without full strip work." },
      { title: "Restroom & Break Area Refresh", description: "Fixtures and mirrors reset if subcontractor use during punch list degraded turnover condition." },
      { title: "Common Area & Corridor Touch-Up", description: "High-visibility paths cleaned after owner tours or municipal inspections scheduled on short notice." },
      { title: "Rapid Mobilization for Closeout Dates", description: "Smaller crews scoped to punch-list zones so you are not paying for a full-building final when only three suites changed." },
    ],
    whyUs: [
      { title: "Right-Sized Scope", description: "We quote touch-up by affected area, not automatic full-building repricing, when the GC documents what changed since final." },
      { title: "Closeout Calendar Awareness", description: "We know touch-up is often 48 to 72 hours before keys. Scheduling is prioritized with realistic crew routing across Idaho and Utah." },
      { title: "Same Construction Standards", description: "Touch-up crews follow the same jobsite safety and access rules as rough and final phases." },
    ],
    faqs: [
      {
        question: "When is touch-up clean needed instead of another final clean?",
        answer: "Touch-up is for localized reset after late trade work or punch list. If most of the building was never final cleaned or debris levels are heavy, another final or rough phase may be required.",
      },
      {
        question: "Can touch-up clean happen the same week as inspection?",
        answer: "Often yes, if scope is defined and access is confirmed. We do not guarantee same-day mobilization in every city without a jobsite review and open crew slot.",
      },
      {
        question: "How is touch-up clean priced compared to final clean?",
        answer: "Touch-up is typically lower total cost because scope is limited to affected zones. Ask for a quote for the affected areas and the agreed return visit.",
      },
      {
        question: "Who should attend the touch-up walkthrough?",
        answer: "Superintendent or PM plus us to mark rooms impacted since final clean. That list becomes the scope so nothing is assumed cleaned that still has open punch work.",
      },
    ],
    keywords:
      "touch-up clean construction Idaho Falls, punch list cleaning Utah, post construction touch up Eastern Idaho, closeout cleaning commercial, builder touch-up clean",
    parentName: "Construction Cleaning",
    parentHref: "/construction-cleaning",
    ctaLabel: "Get Project Quote",
    ctaHeading: "Get a Touch-Up Clean Project Quote",
    serviceLine: "construction-cleaning",
  },
];

export function getServiceHubBySlug(slug: string): IndustryPage | undefined {
  return serviceHubs.find((hub) => hub.slug === slug);
}
